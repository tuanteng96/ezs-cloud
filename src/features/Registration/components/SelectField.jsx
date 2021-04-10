import React from "react";
import PropTypes from "prop-types";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  option: PropTypes.array,
};
SelectField.defaultProps = {
  option: null,
};

function SelectField(props) {
  const { field, form, option, valueChecked } = props;
  const { name } = field;
  const { errors, touched } = form;
    const showError = errors[name] && touched[name];
  return (
    <div className="form-group fv-plugins-icon-container">
      <select
        className="form-control-solid h-auto p-6 rounded-lg font-size-h6 form-control"
        {...field}
      >
        {option &&
          option.map((item, index) => (
            <option key={index} value={item.ID}>
              {item.PackageName}
            </option>
          ))}
      </select>
      {showError && (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{errors[name]}</div>
        </div>
      )}
    </div>
  );
}

export default SelectField;
