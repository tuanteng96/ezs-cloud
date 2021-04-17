import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.bool,
  type: PropTypes.string,
};
InputField.defaultProps = {
  placeholder: "",
  label: "",
  link: false,
  type: "text",
};

function InputField(props) {
  const { field, form, type, label, placeholder, link } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group fv-plugins-icon-container">
      <div className={`${link && "d-flex justify-content-between mt-n5"}`}>
        {label && (
          <label
            className={`font-size-h6 font-weight-700 text-dark ${
              link && "pt-5"
            }`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        {link && (
          <Link
            to="/forgot"
            className="text-primary font-size-h6 font-weight-700 text-hover-primary pt-5"
            id="kt_login_forgot"
          >
            Quên mật khẩu ?
          </Link>
        )}
      </div>
      <div className="input-group input-group-solid">
        <input
          className={`form-control h-auto p-5 rounded-sm ${
            showError && "error-solid is-invalid"
          }`}
          type={type}
          {...field}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      {showError && (
        <div className="fv-plugins-message-container">
          <div data-validator="notEmpty" className="fv-help-block">
            {/* <svg
              aria-hidden="true"
              className="stUf5b qpSchb"
              fill="currentColor"
              focusable="false"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg> */}
            {errors[name]}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputField;
