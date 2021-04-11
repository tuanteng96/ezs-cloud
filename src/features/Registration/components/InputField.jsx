import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
};
InputField.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
};

function InputField(props) {
  const { field, form, type, placeholder, desc, label } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div className="input-group input-group-solid">
        <input
          className={`form-control form-control-lg ${
            showError && "error-solid is-invalid"
          }`}
          type={type}
          {...field}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      {showError ? (
        <div className="fv-plugins-message-container">
          <div data-validator="notEmpty" className="fv-help-block">
            {errors[name]}
          </div>
        </div>
      ) : (
        <span className="form-text text-muted">{desc}</span>
      )}
    </div>
  );
}

export default InputField;
