import { FastField, Form, Formik } from "formik";
import React from "react";
import GoogleLoginAuth from "../../../components/GoogleLoginAuth";
import InputField from "./InputField";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
};
FormLogin.defaultProps = {
  onSubmit: null,
};

function FormLogin(props) {

  const { onSubmit } = props;
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
      .min(6, "Mật khẩu quá ngắn - tối thiểu phải có 6 ký tự."),
  });

  const { loginStatus, loadingOTP } = useSelector((state) => state.userLogin);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form className="form w-xxl-550px rounded-lg p-20 fv-plugins-framework">
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
                {loadingOTP === true ? "Đang gửi OTP ..." : "Đăng nhập"}
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
