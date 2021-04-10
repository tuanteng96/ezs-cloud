import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingFName } from "../registrationSlice";

InputFieldUSN.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.string,
  handleBrandUSN: PropTypes.func,
};
InputFieldUSN.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
  disabled: "",
  handleBrandUSN: null,
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
    handleBrandUSN,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const dispatch = useDispatch();
  const { loadingFname } = useSelector((state) => state.userRegistration);

  const handleOnChange = (evt) => {
    field.onChange(evt);
    handleBrandUSN(evt.target.value, form, errors[name]);
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div
        className={`input-group-solid ${
          loadingFname && "spinner spinner-primary spinner-left"
        }`}
      >
        <input
          className={`form-control form-control-solid form-control-lg ${
            field.value && !showError && "is-valid"
          } ${showError && "error-solid"}`}
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
            <svg
              aria-hidden="true"
              className="stUf5b qpSchb"
              fill="currentColor"
              focusable="false"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            {errors[name]}
          </div>
        </div>
      ) : (
        <span className="form-text text-muted">{desc}</span>
      )}
    </div>
  );
}

export default InputFieldUSN;
