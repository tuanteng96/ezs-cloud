import React from "react";
import PropTypes from "prop-types";

FieldInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
};

FieldInput.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
};

function FieldInput(props) {
  const { field, form, label, type, desc, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        className={`form-control ${showError ? "is-invalid" : ""}`}
        placeholder={placeholder}
        autoComplete="off"
        {...field}
      />
      {showError ? (
        <div className="fv-plugins-message-container">
          <div data-validator="notEmpty" className="fv-help-block">
            {errors[name]}
          </div>
        </div>
      ) : (
        <>{desc && <span className="form-text text-muted">{desc}</span>}</>
      )}
    </div>
  );
}

export default FieldInput;
