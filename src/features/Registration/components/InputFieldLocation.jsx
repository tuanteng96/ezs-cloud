import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { setLoadingBrand, setErrorBrand } from "../registrationSlice";
import { useDispatch } from "react-redux";

InputFieldLocation.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
};
InputFieldLocation.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
};

function InputFieldLocation(props) {
  const dispatch = useDispatch();
  const { field, form, type, placeholder, desc, label, handleLocation } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  
  const handleOnChange = async (evt) => {
    field.onChange(evt);
    await dispatch(setLoadingBrand(true));
    await dispatch(setErrorBrand(null));
    handleLocation(evt, form, errors[name]);
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <div className="input-group input-group-solid">
      <input
        className={`form-control form-control-lg ${showError ? "is-invalid error-solid" : ""
          }`}
        type={type}
        {...field}
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleOnChange}
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

export default InputFieldLocation;
