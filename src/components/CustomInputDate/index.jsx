import React from "react";
import "./css/style.scss";
import PropTypes from "prop-types";

CustomInputDate.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
};
CustomInputDate.defaultProps = {
  value: "",
  onClick: null,
  placeholder: "",
};

function CustomInputDate({ value, onClick, placeholder }) {
  return (
    <div className="input-group input-group-solid date" onClick={onClick}>
      <input
        type="text"
        className="form-control form-control-lg form-control-solid"
        placeholder={placeholder}
        value={value}
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="ki ki-calendar" />
        </span>
      </div>
    </div>
  );
}

export default CustomInputDate;
