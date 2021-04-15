import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import InputField from "./InputField";
import { passwordRegExp } from "../../../helpers/RegExp";
import ListFieldRadio from "./ListFieldRadio";

FormUpdatePwd.propTypes = {
  onSubmit: PropTypes.func,
};

function FormUpdatePwd(props) {

  const { phoneSecure, dataUser, loadingResetPwd } = useSelector(
    (state) => state.userForgot
  );
  const initialValues = {
    PhoneSecure: phoneSecure,
    USN: dataUser.length < 2 ? dataUser[0].USN : "",
    Pwd: "",
    RePwd: "",
  };
  const validationSchema = Yup.object().shape({
    USN: Yup.string().required("Vui lòng chọn tài khoản cần thay đổi."),
    Pwd: Yup.string()
      .required("Vui lòng nhập mật khẩu.")
      .matches(
        passwordRegExp,
        "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ hoa, một số và một ký tự đặc biệt."
      ),
    RePwd: Yup.string()
      .required("Xác nhận mật khẩu của bạn.")
      .oneOf([Yup.ref("Pwd"), null], "Mật khẩu không khớp."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div
              className="pb-5"
              data-wizard-type="step-content"
              data-wizard-state="current"
            >
              <h2 className="mb-10 font-weight-700 text-dark">
                Cập nhập mật khẩu mới
              </h2>
              {/*::Input*/}

              <FastField
                name="USN"
                component={ListFieldRadio}
                label="Tài khoản cần thay đổi"
                type="radio"
                data={dataUser}
              />
              <FastField
                name="Pwd"
                component={InputField}
                placeholder="Mật khẩu mới"
                label="Nhập mật khẩu mới"
                desc="Mật khẩu mới của bạn cần thay đổi"
                type="password"
              />
              {/*end::Input*/}
              {/*::Input*/}
              <FastField
                name="RePwd"
                component={InputField}
                placeholder="Nhập lại mật khẩu mới"
                label="Nhập lại mật khẩu mới"
                desc="Xác nhận mật khẩu mới của bạn"
                type="password"
              />
              {/*end::Input*/}
              {/*begin: Wizard Actions*/}
              <div className="d-flex justify-content-between border-top mt-5 pt-10">
                <div></div>
                <div>
                  <button
                    type="submit"
                    className={`btn btn-primary font-weight-bolder font-size-h6 py-4 my-3 mr-3 px-8 ${loadingResetPwd ? "spinner spinner-white spinner-right disabled" : ""}`}
                    data-wizard-type="action-next"
                  >
                    Lưu mật khẩu mới
                    <span className="svg-icon svg-icon-md ml-3">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Check.svg*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M6.26193932,17.6476484 C5.90425297,18.0684559 5.27315905,18.1196257 4.85235158,17.7619393 C4.43154411,17.404253 4.38037434,16.773159 4.73806068,16.3523516 L13.2380607,6.35235158 C13.6013618,5.92493855 14.2451015,5.87991302 14.6643638,6.25259068 L19.1643638,10.2525907 C19.5771466,10.6195087 19.6143273,11.2515811 19.2474093,11.6643638 C18.8804913,12.0771466 18.2484189,12.1143273 17.8356362,11.7474093 L14.0997854,8.42665306 L6.26193932,17.6476484 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(11.999995, 12.000002) rotate(-180.000000) translate(-11.999995, -12.000002)"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </button>
                </div>
              </div>
              {/*end: Wizard Actions*/}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormUpdatePwd;
