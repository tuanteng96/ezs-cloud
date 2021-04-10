import React, { useEffect, useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';
import { getToken } from "../../helpers/localStorageUser";
import FormLogin from "./components/FormLogin";
import "./css/style.scss";

// Login.propTypes = {};

const isLogin = () => {
  return getToken() ? true : false;
};

function Login(props) {

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
        className="login login-2 login-signin-on d-flex flex-column flex-column-fluid bg-white position-relative overflow-hidden"
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
              Bạn chưa có tài khoản ?
              <Link
                to="/registration"
                id="kt_login_signup"
                className="text-primary font-weight-700 pl-3"
              >
                Đăng ký
              </Link>
            </span>
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="login-body d-flex flex-column-fluid align-items-stretch justify-content-center">
          <div className="container row">
            <div className="col-lg-6 d-flex align-items-center">
              {/*begin::Signin*/}
              <div className="login-form login-signin">
                {/*begin::Form*/}
                <FormLogin />
                {/*end::Form*/}
              </div>
              {/*end::Signin*/}
            </div>
            <div
              className="col-lg-6 bgi-size-contain bgi-no-repeat bgi-position-y-center bgi-position-x-center min-h-150px mt-10 m-md-0"
              style={{
                backgroundImage:
                  `url(${process.env.PUBLIC_URL}/assets/media/svg/illustrations/accomplishment.svg)`,
              }}
            />
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

export default Login;
