import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import { getToken } from "../../helpers/localStorageUser";
import FormLogin from "./components/FormLogin";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/style.scss";
import { login, requireVerifyPhone, reVerify, verify } from "./asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import { setLoadingOTP } from "./loginSlice";

const isLogin = () => {
  return getToken() ? true : false;
};

function Login(props) {

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const elementsOverlay = document.getElementsByClassName(
      "offcanvas-overlay"
    );
    while (elementsOverlay.length > 0) elementsOverlay[0].remove();
  }, []);

  if (isLogin()) {
    return <Redirect to="/" />;
  }

  const handleLogin = async (values, { setErrors, resetForm }) => {
    try {
      const resultAction = await dispatch(login(values));
      const resultData = unwrapResult(resultAction);
      const Link = resultData.UserInfo.UI.Links[0].Link;
      history.push(Link);
    } catch (error) {
      
      if (unauthenAccount(error && error)) {
        const {UserId} = unauthenAccount(error && error);

        Swal.fire({
          title: "Yêu cầu xác thực tài khoản.",
          html: `Tài khoản của bạn chưa được xác thực. Vui lòng thực hiện <b class="text-danger">Lấy mã xác thực</b> để tiếp tục đăng nhập.`,
          icon: "warning",
          confirmButtonText: "Lấy mã xác thực",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            await dispatch(setLoadingOTP(true));
            const resultReVerify = await dispatch(reVerify(UserId));
            const resultReVerifyUn = unwrapResult(resultReVerify);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            await dispatch(setLoadingOTP(false));
            const { value: loginLink } = await Swal.fire({
              title: "Nhập mã OTP gửi về số điện thoại",
              input: "text",
              inputAttributes: {
                autocapitalize: "off",
              },
              inputPlaceholder: "Mã xác thực",
              showDenyButton: true,
              denyButtonColor: "#848484",
              denyButtonText: "Mã xác thực mới",
              confirmButtonText: "Xác thực",
              showLoaderOnConfirm: true,
              showLoaderOnDeny: true,
              allowOutsideClick: false,
              preConfirm: async (code) => {
                if (!code) {
                  Swal.showValidationMessage(`Mã xác thực không hợp lệ.`);
                  return;
                }
                try {
                  const verifyUser = await dispatch(
                    verify({ UserID: UserId, Secure: code })
                  );
                  const verifyUserUn = unwrapResult(verifyUser);
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  const resultAction = await dispatch(login(values));
                  const resultData = unwrapResult(resultAction);
                  
                  const Link = resultData.UserInfo.UI.Links[0].Link;
                  return new Promise((resolve, reject) => {
                    resolve(Link);
                  });
                } catch (error) {
                  Swal.showValidationMessage(`Mã xác thực không hợp lệ.`);
                }
              },
              preDeny: async () => {
                try {
                  const resultResetreVerify = await dispatch(reVerify(UserId));
                  const resultResetreVerifyUn = unwrapResult(
                    resultResetreVerify
                  );
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  toast.success("Gửi mã OTP mới thành công !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                  });
                } catch (error) {
                  Swal.showValidationMessage(
                    `Lấy mã mới nhận mới không thành công.`
                  );
                }
                return false;
              },
            });

            if (loginLink) {
              history.push(loginLink);
            }
          },
          allowOutsideClick: false,
        }).then(async (result) => {
          resetForm();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Xảy ra lỗi.",
          text: "Tài khoản hoặc mật khẩu không chính xác",
        });
      }
    }
  };

  const unauthenAccount = (error) => {
    
    if (error.errors && error.errors && error.errors.USN[0] === "TK_CHUA_XAC_THUC") {
      return {
        UserId: error.appendData.UserId
      };
    } else {
      return null;
    }
  };

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
                <FormLogin onSubmit={handleLogin} />
                {/*end::Form*/}
              </div>
              {/*end::Signin*/}
            </div>
            <div
              className="col-lg-6 bgi-size-contain bgi-no-repeat bgi-position-y-center bgi-position-x-center min-h-150px mt-10 m-md-0"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/media/svg/illustrations/accomplishment.svg)`,
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
      <ToastContainer />
    </div>
  );
}

export default Login;
