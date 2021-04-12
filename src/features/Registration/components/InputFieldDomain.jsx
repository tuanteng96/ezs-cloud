import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { existValidate } from "../asyncActions";
import { setErrorBrand } from "../registrationSlice";
import { _, debounce } from "lodash";

InputFieldDomain.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
};
InputFieldDomain.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
};

function InputFieldDomain(props) {
  const { field, form, type, placeholder, desc, label } = props;

  const { loadingBrand, errorBrand } = useSelector(
    (state) => state.userRegistration
  );
  const dispatch = useDispatch();

  const { name } = field;
  const { errors, touched } = form;
  const [time, setTime] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const showError = (errors[name] || errorBrand) && touched[name];

  const handleOnChange = (evt) => {
    const value = evt.target.value;
    field.onChange(evt);
    setIsloading(true);

    // if (errors[name] || value.length < 1) {
    //   dispatch(setErrorBrand(null))
    //   setIsloading(false);
    //   return false;
    // }
    const data = {
      name: value + ".ezs.vn",
      type: "brand",
    };

    if (time) clearTimeout(time);
    setTime(
      setTimeout(async () => {
        const result = await dispatch(existValidate(data));
        const resultUn = unwrapResult(result);
        if (resultUn) {
          form.setFieldTouched("BrandLink", true, false);
          form.setFieldError(
            "BrandLink",
            "Đường dẫn đã tồn tại. Vui lòng nhập đường dẫn khác."
          );
          setIsloading(false);
          dispatch(
            setErrorBrand("Đường dẫn đã tồn tại. Vui lòng nhập đường dẫn khác.")
          );
        } else {
          setIsloading(false);
          dispatch(setErrorBrand(null));
        }
      }, 500)
    );
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div className={`input-group ${!showError && "input-group-solid"}`}>
        <div
          className={`spinner-input-group ${
            loadingBrand || isLoading
              ? "spinner spinner-primary spinner-right"
              : ""
          }`}
        >
          <input
            className={`form-control form-control-lg ${
              field.value && !isLoading && !loadingBrand && !showError
                ? "is-valid"
                : ""
            } ${showError ? "error-solid is-invalid" : ""}`}
            type={type}
            {...field}
            autoComplete="off"
            placeholder={placeholder}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-primary btn-lg font-weight-700"
            type="button"
          >
            .ezs.vn
          </button>
        </div>
      </div>
      {showError ? (
        <div className="fv-plugins-message-container">
          <div data-validator="notEmpty" className="fv-help-block">
            {errors[name] || errorBrand}
          </div>
        </div>
      ) : (
        <span className="form-text text-muted">{desc}</span>
      )}
    </div>
  );
}

export default InputFieldDomain;
