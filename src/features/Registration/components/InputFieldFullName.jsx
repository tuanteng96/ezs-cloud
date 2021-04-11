import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { setErrorUSN, setLoadingFName } from "../registrationSlice";
import { useDispatch } from "react-redux";

InputFieldFullName.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.string,
  handleFullname: PropTypes.func,
};
InputFieldFullName.defaultProps = {
  placeholder: "",
  type: "text",
  desc: "",
  label: "",
  handleFullname: null,
};

function InputFieldFullName(props) {
  const dispatch = useDispatch();
  const { field, form, type, placeholder, desc, label, handleFullname } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleOnChange = async (evt) => {
    field.onChange(evt);
    await dispatch(setLoadingFName(true));
    await dispatch(setErrorUSN(null));
    handleFullname(evt, form, errors[name]);
  };

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

export default InputFieldFullName;
