import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string,
};
InputField.defaultProps = {
  placeholder: "",
  label: "",
  desc: "",
  type: "text",
};
function InputField(props) {
  const { field, form, type, label, placeholder, desc } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="form-group fv-plugins-icon-container">
      {label && <label>{label}</label>}

      <input
        type={type}
        {...field}
        className={`form-control form-control-solid form-control-lg ${
          showError && "is-invalid"
        }`}
        placeholder={placeholder}
      />
      {!showError && desc && (
        <span className="form-text text-muted">{desc}</span>
      )}
      {showError && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );
}

export default InputField;
