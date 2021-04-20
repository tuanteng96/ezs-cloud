import React from "react";
import PropTypes from "prop-types";

FieldSwitch.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
FieldSwitch.defaultProps = {
  type: "checkbox",
  label: "",
};

function FieldSwitch(props) {
  const { field, form, label, type } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="form-group row m-0">
      {label && <label className="col-3 col-form-label">{label}</label>}
      <div className="col-9">
        <span className="switch switch-icon">
          <label>
            <input
              type={type}
              {...field}
              value={field.value}
            />
            <span />
          </label>
        </span>
      </div>
    </div>
  );
}

export default FieldSwitch;
