import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import GoogleLoginAuth from "../../../components/GoogleLoginAuth";
import InputField from "./InputField";
import * as Yup from "yup";
import { login, reVerify } from "../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handelErrorApi } from "../../../helpers/handleErrorApi";
import Swal from "sweetalert2";
import firebase from "../../../firebase";
import { verify } from "../../Registration/asyncActions";
// import PropTypes from 'prop-types';

// FormLogin.propTypes = {

// };

function FormLogin(props) {
  const initialValues = {
    Name: "",
    Pwd: "",
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(4, "Tài khoản quá ngắn - tối thiểu phải có 4 ký tự.")
      .max(50, "Tài khoản quá dài - nhiều nhất 50 ký tự.")
      .required("Vui lòng nhập tài khoản của bạn."),
    Pwd: Yup.string()
      .required("Vui lòng nhập mật khẩu")
      .min(4, "Mật khẩu quá ngắn - tối thiểu phải có 4 ký tự."),
  });
  const dispatch = useDispatch();
  let history = useHistory();

  const [loadingOTP, setLoadingOTP] = useState(false);
  const { loginStatus } = useSelector((state) => state.userLogin);

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    
    try {
      const resultAction = await dispatch(login(values));
      const resultData = unwrapResult(resultAction);
      const phoneNumber = `+${resultData.user.RegPhone}`;
      const UserId = resultData.user.Id;
      const isVerified = resultData.user.Verified.Success;

      if (isVerified) {
        toast.success("Đăng nhập thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        setTimeout(() => {
          history.push("/dashboard");
        }, 1000);
      }
      else {
        Swal.fire({
          title: "Yêu cầu xác thực tài khoản ?",
          html: `Tài khoản của bạn chưa được xác thực. Vui lòng thực hiện <b class="text-danger">Lấy mã xác thực<b> để tiếp tục đăng nhập.`,
          icon: "warning",
          //showCancelButton: true,
          // confirmButtonColor: "#3085d6",
          // cancelButtonColor: "#d33",
          confirmButtonText: "Lấy mã xác thực",
        }).then(async (result) => {
          if (result.isConfirmed) {
            setLoadingOTP(true);
            try {
              const resultVerifyAction = await dispatch(reVerify(UserId));
              const resultVerifyData = unwrapResult(resultVerifyAction);
              const Secure = resultVerifyData.Secure;

              window.appVerifier = new firebase.auth.RecaptchaVerifier(
                "recaptcha-container",
                {
                  size: "invisible",
                  callback: function (response) {
                    // reCAPTCHA solved - will proceed with submit function
                  },
                  "expired-callback": function () {
                    // Reset reCAPTCHA?
                  },
                }
              );
              firebase
                .auth()
                .signInWithPhoneNumber(phoneNumber, window.appVerifier)
                .then(async function (e) {
                  setLoadingOTP(false);
                  const { value: VerifyCode } = await Swal.fire({
                    title: "Nhập mã OTP gửi về số điện thoại của bạn",
                    input: "text",
                    inputAttributes: {
                      autocapitalize: "off",
                    },
                    inputValidator: (code) => {
                      return new Promise((resolve) => {
                        if (code === "") {
                          resolve(
                            "Vui lòng nhập mã OTP gửi về số điện thoại của bạn."
                          );
                        } else {
                          e.confirm(code)
                            .then(function (result) {
                              resolve();
                            })
                            .catch((error) => {
                              resolve("Mã OTP không chính xác.");
                            });
                        }
                      });
                    },
                    showCancelButton: true,
                    confirmButtonText: "Xác nhận",
                    showLoaderOnConfirm: true,
                  });

                  if (VerifyCode) {
                    try {
                      const infoVerify = {
                        UserID: UserId,
                        Secure: Secure,
                      };
                      const resultVerifyAction = await dispatch(
                        verify(infoVerify)
                      );

                      Swal.fire({
                        title: "Xác thực thành công.",
                        icon: "success",
                        html: `Tài khoản của bạn đã được xác thực.Chọn <b class="text-danger" >tiếp tục</b> để bắt đầu quản lý phần mềm.`,
                        showCancelButton: true,
                        confirmButtonText: `Tiếp tục`,
                        cancelButtonText: `Đóng`,
                      }).then(async (result) => {
                        if (result.isConfirmed) {
                          try {
                            const resultLoginAction = await dispatch(
                              login(values)
                            );
                            const resultLoginData = unwrapResult(
                              resultLoginAction
                            );
                            toast.success("Đăng nhập thành công !", {
                              position: toast.POSITION.TOP_RIGHT,
                              autoClose: 1000,
                            });
                            setTimeout(() => {
                              history.push("/dashboard");
                            }, 500);
                          }
                          catch (errors) {
                            setErrors(handelErrorApi(errors.errors));
                          }
                        } else {
                          resetForm();
                        }
                      });

                    } catch (errors) {
                      setErrors(handelErrorApi(errors.errors));
                    }
                  }
                });
            } catch (errors) {
              setLoadingOTP(false);
              Swal.fire({
                icon: "error",
                title: "Xảy ra lỗi.",
                text: errors.message,
              });
              console.log(errors);
            }
          }
        });
      }
      
      //history.push("/dashboard");
      //dispatch(setUser());
    } catch (errors) {
      Swal.fire({
        icon: "error",
        title: "Xảy ra lỗi.",
        text: "Tài khoản hoặc mật khẩu không chính xác",
      });
    }

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form className="form w-xxl-550px rounded-lg p-20 fv-plugins-bootstrap fv-plugins-framework">
            {/*begin::Title*/}
            <div className="pb-13 pt-lg-0 pt-5">
              <h3 className="font-weight-700 text-dark font-size-h4 font-size-h1-lg">
                Đăng nhập tài khoản
              </h3>
            </div>
            {/*begin::Title*/}
            {/*begin::Form group*/}
            <FastField
              name="Name"
              component={InputField}
              placeholder="Tên đăng nhập & Số điện thoại"
              label="Tài khoản"
              link={false}
              type="text"
            />
            {/*end::Form group*/}
            {/*begin::Form group*/}
            <FastField
              name="Pwd"
              component={InputField}
              placeholder="Mật khẩu của bạn"
              label="Mật khẩu"
              link={true}
              type="password"
            />
            {/*end::Form group*/}
            {/*begin::Action*/}
            <div className="pb-lg-0 pb-5">
              <button
                type="submit"
                className={`btn btn-primary font-weight-bolder font-size-h6 py-4 my-3 mr-3 ${
                  loginStatus === "loading" || loadingOTP === true
                    ? "spinner spinner-white spinner-right disabled"
                    : "px-8"
                }`}
              >
                {loadingOTP === true ? "Đang gửi OTP" : "Đăng nhập"}
              </button>
              <GoogleLoginAuth />
            </div>
            {/*end::Action*/}
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormLogin;
