import React from "react";
import PropTypes from "prop-types";

InputFieldRadio.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};
InputFieldRadio.defaultProps = {
  type: "radio",
  label: "",
  options: null,
};

function InputFieldRadio(props) {
  const { field, form, type, label, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group row">
      {label && (
        <label
          className="col-form-label text-right col-lg-3 col-sm-12"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`col-lg-9 col-xl-6 col-form-label ${
          showError && "validated"
        }`}
      >
        <div className="radio-inline">
          {options &&
            options.map((item, index) => (
              <label className="radio" key={index}>
                <input
                  type={type}
                  {...field}
                  value={item.value}
                  checked={value === item.value}
                />
                <span />
                {item.key}
              </label>
            ))}
        </div>
        {showError && <div className="invalid-feedback">{errors[name]}</div>}
      </div>
    </div>
  );
}

export default InputFieldRadio;
