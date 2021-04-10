import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './css/style.scss';

import moment from "moment";
moment.locale("vi");

InputFieldDate.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  desc: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputFieldDate.defaultProps = {
  label: "",
  placeholder: "",
  desc: "",
  disabled: false,
};

function InputFieldDate(props) {
  const { field, form, label, desc, placeholder, disabled } = props;
  const { name, value } = field;
  const [startDate, setStartDate] = useState(
    value ? moment(value, 'DD/MM/YYYY').format() : value
  );
  const handleOnChange = (date) => {
    setStartDate(date);
    const changeEvent = {
      target: {
        name: name,
        value: moment(date).format('MM/DD/YYYY'),
      },
    };
    field.onChange(changeEvent);
  };

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
      <div className={`col-lg-9 col-xl-6 ${showError && "validated"}`}>
        <div className="input-group input-group-lg input-group-solid custom-date-icon">
          <DatePicker
            selected={value ? new Date(startDate) : null}
            onChange={handleOnChange}
            placeholderText={placeholder}
            dateFormat="dd/MM/yyyy"
            className={`form-control form-control-lg form-control-solid ${
              showError && "is-invalid"
            }`}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="ki ki-calendar" />
            </span>
          </div>
        </div>
        {showError && <div className="invalid-feedback">{errors[name]}</div>}

        {desc && <span className="form-text text-muted">{desc}</span>}
      </div>
    </div>
  );
}

export default InputFieldDate;
