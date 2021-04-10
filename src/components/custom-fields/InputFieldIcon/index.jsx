import React from "react";
import PropTypes from "prop-types";

InputFieldIcon.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputFieldIcon.defaultProps = {
  type: "text",
  label: "",
  icon: "",
  placeholder: "",
  disabled: false,
};

function InputFieldIcon(props) {
  const { field, form, type, label, placeholder, disabled, icon } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group row">
      {label && (
        <label
          className="col-xl-3 col-lg-3 col-form-label text-right"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={`col-lg-9 col-xl-6 ${showError && "validated"}`}>
        <div
          className={`input-group input-group-lg ${
            !showError && "input-group-solid"
          }`}
        >
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={icon} />
            </span>
          </div>
          <input
            id={name}
            className={`form-control form-control-lg form-control-solid ${
              showError && "is-invalid"
            }`}
            type={type}
            {...field}
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
        {showError && <div className="invalid-feedback">{errors[name]}</div>}
      </div>
    </div>
  );
}

export default InputFieldIcon;
