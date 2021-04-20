import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { getToken } from "../../helpers/localStorageUser";
import FormRegistration from "../Registration/components/FormRegistration";
import "./css/style.scss";
import ReCAPTCHA from "react-google-recaptcha";
// import PropTypes from 'prop-types';

// Registration.propTypes = {

// };

const isLogin = () => {
  return getToken() ? true : false;
};

const recaptchaRef = React.createRef();

function Registration(props) {
  useEffect(() => {
    const elementsOverlay = document.getElementsByClassName(
      "offcanvas-overlay"
    );
    while (elementsOverlay.length > 0) elementsOverlay[0].remove();
  }, []);
    
  if (isLogin()) {
    return <Redirect to="/" />;
  }
  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Login*/}
      <div
        className="login login-signin-on d-flex flex-column flex-column-fluid bg-white position-relative overflow-hidden"
        id="kt_login"
      >
        {/*begin::Header*/}
        <div className="login-header py-10 flex-column-auto">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
            {/*begin::Logo*/}
            <Link to="/" className="flex-column-auto py-5 py-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/assets/media/logos/logo-ezs.png`}
                alt="logo"
                className="h-35px"
              />
            </Link>
            {/*end::Logo*/}
            <span className="text-muted font-weight-700 font-size-h4">
              Bạn đã có tài khoản ?
              <Link
                to="/login"
                id="kt_login_signup"
                className="text-primary font-weight-700 pl-3"
              >
                Đăng nhập
              </Link>
            </span>
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="login-body d-flex flex-column-fluid align-items-stretch justify-content-center">
          <div className="container row">
            <div className="col-lg-12 d-flex align-items-center">
              {/*begin::Signin*/}
              <div className="card card-custom w-100 bg-white">
                <div className="card-body p-0">
                  {/*begin::Form*/}
                  <div className="wizard wizard-5">
                    <div className="col-lg-5 border-bottom border-bottom-lg-0 border-right-lg">
                      <div className="py-8 px-8 py-lg-20 px-lg-10">
                        <div className="text-center py-10">
                          <div
                            data-wizard-type="step-info"
                            data-wizard-state="current"
                          >
                            <h2 className="font-weight-700 mb-5">
                              Đăng ký tài khoản
                            </h2>
                            <p className="font-size-lg text-dark-50">
                              Phần mềm quản lý spa, thẩm mỹ viện EZS
                              <br />
                              Giúp giảm chi phí và tăng doanh thu, chất lượng
                              dịch vụ tích hợp sẵn
                              <br />
                              Website / APP.
                            </p>
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/media/svg/illustrations/process-store.svg`}
                              alt="image"
                              className="mt-10 h-300px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="py-8 px-8 pt-lg-18 pb-lg-20 px-lg-20">
                        <FormRegistration recaptchaRef={recaptchaRef} />
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          size="invisible"
                          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                          //onChange={handleLogin}
                        />
                      </div>
                    </div>
                  </div>
                  {/*end::Form*/}
                </div>
              </div>
              {/*end::Signin*/}
            </div>
          </div>
        </div>
        {/*end::Body*/}
        {/*begin::Footer*/}
        <div className="login-footer py-10 flex-column-auto">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
            <div className="font-size-h6 font-weight-700 order-2 order-md-1 py-2 py-md-0">
              <span className="text-muted font-weight-700 mr-2">2021©</span>
              <a
                href="https://ezs.vn"
                target="_blank"
                className="text-dark-50 text-hover-primary"
              >
                EZS.VN
              </a>
            </div>
            <div className="font-size-h5 font-weight-700 order-1 order-md-2 py-2 py-md-0">
              <a href="#" className="text-primary">
                Hướng dẫn
              </a>
              <a href="#" className="text-primary ml-10">
                Điều khoản
              </a>
              <a href="#" className="text-primary ml-10">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Login*/}
    </div>
  );
}

export default Registration;
