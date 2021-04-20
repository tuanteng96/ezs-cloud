import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { useState } from "react";

FieldInputPrice.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  desc: PropTypes.string,
  label: PropTypes.string,
};

FieldInputPrice.defaultProps = {
  placeholder: "",
  desc: "",
  label: "",
};

function FieldInputPrice(props) {
  const { field, form, label, desc, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <NumberFormat
        {...field}
        placeholder={placeholder && placeholder}
        isNumericString={true}
        thousandSeparator={true}
        className={`form-control ${showError ? "is-invalid" : ""}`}
        onValueChange={(values) => {
          field.onChange({
            target: { name: "floatPrice", value: values.floatValue },
          });
        }}
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

export default FieldInputPrice;
