import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

ListFieldRadio.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.array
};
ListFieldRadio.defaultProps = {
  label: "",
  type: "radio",
  data: [],
};
function ListFieldRadio(props) {

  
  const { field, form, type, label, data } = props;
  const { name } = field;
  const { errors, touched, values } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="fv-plugins-icon-container mb-5">
      <div className="form-group m-0">
        {label && <label className="p-0">{label}</label>}
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <label className="option mt-5 cursor-pointer">
                  <span className="option-control">
                    <span className="radio">
                      <input
                        type={type}
                        {...field}
                        value={item.USN}
                        checked={`${values.USN === item.USN ? "checked" : ""}`}
                      />
                      <span />
                    </span>
                  </span>
                  <span className="option-label">
                    <span className="option-head">
                      <span className="option-title font-weight-700">
                        {item.USN}
                      </span>
                    </span>
                    <span className="option-body">
                      {item.Brands[0].Title} <br />
                      {item.Brands[0].Link}
                    </span>
                  </span>
                </label>
              </div>
            ))}
          <div className="col-md-12">
            {showError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block fv-help-custom">
                  {errors[name]}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFieldRadio;
