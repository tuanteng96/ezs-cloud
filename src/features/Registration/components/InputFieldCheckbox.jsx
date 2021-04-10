import React from "react";
import PropTypes from "prop-types";

InputFieldCheckbox.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
};

InputFieldCheckbox.defaultProps = {
  type: "text",
};

function InputFieldCheckbox(props) {
  const { field, form, type } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="fv-plugins-icon-container has-danger">
      <div className="d-flex align-items-center ">
        <label className="checkbox mb-0">
          <input type={type} {...field} className="is-invalid" />
          <span />
        </label>
        <div className="pl-2">
          Tôi đồng ý các
          <a href="#" className="ml-1 text-primary font-weight-700">
            điều khoản và điều kiện
          </a>
        </div>
      </div>
      {showError && (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{errors[name]}</div>
        </div>
      )}
    </div>
  );
}

export default InputFieldCheckbox;
