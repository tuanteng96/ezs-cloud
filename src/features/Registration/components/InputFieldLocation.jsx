import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { setLoadingBrand } from "../registrationSlice";
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
    handleLocation(evt, form, errors[name]);
  };

  return (
    <div className="form-group fv-plugins-icon-container has-success">
      {label && <label className="font-weight-700">{label}</label>}
      <input
        className={`form-control form-control-solid form-control-lg ${showError && "error-solid"
          }`}
        type={type}
        {...field}
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
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

export default InputFieldLocation;
