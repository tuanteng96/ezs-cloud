import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setErrorUSN } from "../registrationSlice";
import { existValidate } from "../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";

InputFieldUSN.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  recaptchaRef: PropTypes.object.isRequired,
};
InputFieldUSN.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
  disabled: "",
  recaptchaRef: null,
};

function InputFieldUSN(props) {
  const {
    field,
    form,
    type,
    placeholder,
    desc,
    label,
    disabled,
    recaptchaRef,
  } = props;

  const dispatch = useDispatch();
  const { loadingFname, errorUSN } = useSelector(
    (state) => state.userRegistration
  );
  
  const { name } = field;
  const { errors, touched } = form;
  const [time, setTime] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const showError = (errors[name] || errorUSN) && touched[name];

  const handleOnChange = (evt) => {
    const value = evt.target.value;
    field.onChange(evt);
    setIsloading(true);

    // if (errors[name] || value.length < 1) {
    //   dispatch(setErrorUSN(null))
    //   setIsloading(false);
    //   return false;
    // }

    if (time) clearTimeout(time);
    setTime(
      setTimeout(async () => {
        const token = await recaptchaRef.current.executeAsync();
        const data = {
          name: value,
          type: "user",
          token: token,
        };

        const result = await dispatch(existValidate(data));
        const resultUn = unwrapResult(result);
        if (resultUn) {
          form.setFieldTouched("USN", true, false);
          form.setFieldError(
            "USN",
            "Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác."
          );
          setIsloading(false);
          dispatch(setErrorUSN("Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác."))
        } else {
          setIsloading(false);
          dispatch(setErrorUSN(null))
        }
      }, 500)
    );

    //handleBrandUSN(evt.target.value, form, errors[name]);
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div
        className={`input-group input-group-solid ${
          loadingFname || isLoading ? "spinner spinner-primary spinner-right" : ""
        }`}
      >
        <input
          className={`form-control form-control-lg ${
            field.value && !isLoading && !loadingFname && !showError ? "is-valid" : ""
          } ${showError ? "error-solid is-invalid" : ""}`}
          type={type}
          {...field}
          autoComplete="off"
          placeholder={placeholder}
          disabled={disabled && disabled}
          onChange={handleOnChange}
        />
      </div>
      {showError ? (
        <div className="fv-plugins-message-container">
          <div data-validator="notEmpty" className="fv-help-block">
          {errors[name] || errorUSN}
          </div>
        </div>
      ) : (
        <span className="form-text text-muted">{desc}</span>
      )}
    </div>
  );
}

export default InputFieldUSN;
