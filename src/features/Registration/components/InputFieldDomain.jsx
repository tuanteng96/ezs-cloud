import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

InputFieldDomain.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
  handleBrandName: PropTypes.func,
};
InputFieldDomain.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
  handleBrandName: null,
};

function InputFieldDomain(props) {
  const {
    field,
    form,
    type,
    placeholder,
    desc,
    label,
    handleBrandName,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const { loadingBrand } = useSelector(
    (state) => state.userRegistration
  );
  const handleOnChange = (evt) => {
    field.onChange(evt);
    handleBrandName(evt.target.value, form, errors[name]);
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div
        className={`input-group ${!showError && "input-group-solid"} ${
          loadingBrand && "spinner spinner-primary spinner-left"
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
          onChange={handleOnChange}
        />
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

export default InputFieldDomain;
