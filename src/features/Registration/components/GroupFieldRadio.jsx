import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getPackage } from "./../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import ReCAPTCHA from "react-google-recaptcha";
import { formatVND } from "../../../helpers/globalFormat";

GroupFieldRadio.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  option: PropTypes.array,
};

GroupFieldRadio.defaultProps = {
  type: "radio",
  option: null,
};

function GroupFieldRadio(props) {
  const { field, form, option } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const dispatch = useDispatch();
  const [arrPackage, setArrPackage] = useState([]);

  const recaptchaRef = React.createRef();

  useEffect(() => {
    const fetchData = async () => {
      const token = await recaptchaRef.current.executeAsync();
      const result = await dispatch(getPackage(token));
      const resultUn = unwrapResult(result);
      console.log(resultUn);
      setArrPackage(resultUn);
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      {arrPackage &&
        arrPackage.map((item, index) => (
          <div className="col-lg-6" key={index}>
            <div className={!showError ? "form-group" : "null"}>
              <label className="option cursor-pointer">
                <span className="option-control">
                  <span className="radio">
                    <input type="radio" {...field} value={item.Id} />
                    <span />
                  </span>
                </span>
                <span className="option-label">
                  <span className="option-head">
                    <span className="option-title font-weight-800">
                      {item.Name}
                    </span>
                    <span className="option-focus font-weight-800 text-danger">
                      {item.Price ? `${formatVND(item.Price)}` : "Free"}
                      {item.Price ? <span className="ml-1">đ</span> :  ""}
                    </span>
                  </span>
                  <span className="option-body">
                    Estimated 14-20 Day Shipping (Duties and taxes may be due
                    upon delivery)
                  </span>
                </span>
              </label>
            </div>
          </div>
        ))}
      <div className={`col-md-12 ${showError ? "form-group" : null}`}>
        {showError && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{errors[name]}</div>
          </div>
        )}
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        //onChange={handleLogin}
      />
    </div>
  );
}

export default GroupFieldRadio;
