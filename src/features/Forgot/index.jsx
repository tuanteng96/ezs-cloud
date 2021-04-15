import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { handelErrorApi } from "../../helpers/handleErrorApi";
import { getToken } from "../../helpers/localStorageUser";
import {
  findUsersByPhone,
  requireVerifyPhone,
  resetForgot,
  verifyPhone,
} from "./asyncActions";
import FormPhone from "./components/FormPhone";
import FormUpdatePwd from "./components/FormUpdatePwd";
import "./css/style.scss";
import {
  setLoadingPhone,
  setSendOTP,
  setdataUser,
  setPhoneSecure,
  setLoadingResetPwd,
} from "./forgotSlice";
// import PropTypes from 'prop-types';

// Forgot.propTypes = {};

const isLogin = () => {
  return getToken() ? true : false;
};

function Forgot(props) {
  const [isChangePwd, setIsChangePwd] = useState(false);
  const dispath = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const elementsOverlay = document.getElementsByClassName(
      "offcanvas-overlay"
    );
    while (elementsOverlay.length > 0) elementsOverlay[0].remove();
  }, []);

  if (isLogin()) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    const phone = `84${values.Phone}`;
    try {
      await dispath(setLoadingPhone(true));
      const resultRequire = await dispath(requireVerifyPhone(phone));
      unwrapResult(resultRequire);
      await dispath(setSendOTP(true));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await dispath(setSendOTP(false));
      Swal.fire({
        title: "Nhập mã OTP gửi về số điện thoại",
        input: "text",
        inputPlaceholder: "Nhập mã xác thực",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Xác nhận",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: async (code) => {
          try {
            const resultPhone = await dispath(
              verifyPhone({
                Phone: phone,
                secure: code,
              })
            );
            const resultPhoneUn = unwrapResult(resultPhone);

            await dispath(setPhoneSecure(resultPhoneUn.phoneSecure));

            const resultListUser = await dispath(
              findUsersByPhone({
                Phone: phone,
                PhoneSecure: resultPhoneUn.phoneSecure,
              })
            );
            const resultListUserUn = unwrapResult(resultListUser);

            await dispath(setdataUser(resultListUserUn));
            await dispath(setLoadingPhone(false));
            setIsChangePwd(true);
          } catch (error) {
            Swal.showValidationMessage(`Mã xác nhận không hợp lệ.`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        dispath(setLoadingPhone(false));
        dispath(setSendOTP(false));
      });
    } catch (errors) {
      await dispath(setLoadingPhone(false));
      setErrors(handelErrorApi(errors.errors));
    }
  };


  const handleResetPwd = async (values, { setErrors, resetForm }) => {
    try {
      await dispath(setLoadingResetPwd(true));
      const result = await dispath(resetForgot(values));
      const resultUn = unwrapResult(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      await dispath(setLoadingResetPwd(false));
      Swal.fire({
        title: "Thay đổi thành công !",
        text: "Mật khẩu của bạn đã được thay đổi thành công.",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText:"Tiếp tục",
        confirmButtonText: "Đăng nhập tài khoản",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/login");
        }
        else {
          setIsChangePwd(false);
        }
      });

    } catch (errors) {
      console.log(errors);
      await dispath(setLoadingResetPwd(false));
      setErrors(handelErrorApi(errors.errors));
    }
  };

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
                  <div
                    className="wizard wizard-5"
                    id="kt_wizard"
                    data-wizard-state="first"
                    data-wizard-clickable="false"
                  >
                    {/*begin: Wizard Nav*/}
                    <div className="w-lg-50 border-bottom border-bottom-lg-0 border-right-lg">
                      <div className="py-8 px-8 py-lg-20 px-lg-10">
                        <div className="wizard-steps">
                          {/*begin::Wizard Step*/}
                          <div
                            className="wizard-step"
                            data-wizard-type="step"
                            data-wizard-state="current"
                          >
                            <div className="wizard-label">1</div>
                          </div>
                          {/*end::Wizard Step*/}
                          {/*begin::Wizard Step*/}
                          <div
                            className="wizard-step"
                            data-wizard-type="step"
                            data-wizard-state={isChangePwd && "current"}
                          >
                            <div className="wizard-label">2</div>
                          </div>
                          {/*end::Wizard Step*/}
                        </div>
                        <div className="text-center py-10">
                          {!isChangePwd && (
                            <div
                              data-wizard-type="step-info"
                              data-wizard-state="current"
                            >
                              <h2 className="font-weight-700 mb-5">
                                Quên mật khẩu
                              </h2>
                              <p className="font-size-lg text-dark-50">
                                Vui lòng nhập số điện thoại của bạn.
                                <br />
                                Chúng tôi sẽ gửi mã OTP xác nhận về số điện
                                thoại.
                              </p>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/svg/illustrations/process-analyse.svg`}
                                alt="image"
                                className="mt-10 h-300px"
                              />
                            </div>
                          )}
                          {isChangePwd && (
                            <div
                              data-wizard-type="step-info"
                              data-wizard-state="current"
                            >
                              <h2 className="font-weight-700 mb-5">
                                Thay đổi mật khẩu
                              </h2>
                              <p className="font-size-lg text-dark-50">
                                Hay cập nhập mật khẩu mới của bạn. <br /> Vui
                                lòng ghi nhớ mật khẩu.
                              </p>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/svg/illustrations/process-verify.svg`}
                                alt="image"
                                className="mt-10 h-300px"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/*end: Wizard Nav*/}
                    {/*begin: Wizard Body*/}
                    <div className="w-lg-50">
                      <div className="py-8 px-8 pt-lg-30 pb-lg-20 px-lg-20 h-100 d-flex flex-column justify-content-center">
                        {/*begin: Wizard Form*/}

                        {/*begin: Wizard Step 1*/}
                        {!isChangePwd && <FormPhone onSubmit={handleSubmit} />}
                        {/*end: Wizard Step 1*/}
                        {/*begin: Wizard Step 2*/}
                        {isChangePwd && (
                          <FormUpdatePwd onSubmit={handleResetPwd} />
                        )}
                        {/*end: Wizard Step 2*/}
                        {/*end: Wizard Form*/}
                      </div>
                    </div>
                    {/*end: Wizard Body*/}
                  </div>
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

export default Forgot;
