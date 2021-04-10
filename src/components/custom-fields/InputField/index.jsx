import React from "react";
import PropTypes from "prop-types";

InputFiled.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  labelClass: PropTypes.string,
  divClass: PropTypes.string,
  disabled: PropTypes.bool,
};
InputFiled.defaultProps = {
  type: "text",
  label: "",
  labelClass: "",
  divClass: "",
  placeholder: "",
  disabled: false,
};

function InputFiled(props) {
  const {
    field,
    form,
    type,
    label,
    labelClass,
    divClass,
    placeholder,
    disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group row">
      {label && (
        <label className={labelClass} htmlFor={name}>
          {label}
        </label>
      )}

      <div className={divClass}>
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
        {showError && <div className="invalid-feedback">{errors[name]}</div>}
      </div>
    </div>
  );
}

export default InputFiled;
