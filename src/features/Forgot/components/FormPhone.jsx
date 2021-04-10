import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { phoneRegExp } from "../../../helpers/RegExp";

FormPhone.propTypes = {
  onSubmit: PropTypes.func,
};
FormPhone.defaultProps = {
  onSubmit: null,
};

function FormPhone(props) {
  const initialValues = {
    Phone: null,
  };
  const validationSchema = Yup.object().shape({
    Phone: Yup.string()
      .required("Vui lòng nhập số điện thoại.")
      .matches(phoneRegExp, "Số điện thoại không hợp lệ.")
      .nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form>
            <div
              className="pb-5"
              data-wizard-type="step-content"
              data-wizard-state="current"
            >
              <h2 className="mb-10 font-weight-700 text-dark">
                Nhập thông tin tài khoản của bạn
              </h2>
              {/*begin::Input*/}
              <FastField
                name="Phone"
                component={InputField}
                placeholder="Nhập số điện thoại"
                label="Số điện thoại"
                desc="Vui lòng nhập số điện thoại cần thiết lập lại mật khẩu."
                type="text"
              />
              {/*end::Input*/}
              {/*begin: Wizard Actions*/}
              <div className="d-flex justify-content-between border-top mt-5 pt-10">
                <div></div>
                <div className="d-flex">
                  <button
                    type="submit"
                    id="next-step"
                    className="btn btn-primary font-weight-bolder font-size-h6 py-4 my-3 mr-3 px-8"
                    data-wizard-type="action-next"
                  >
                    Tiếp theo
                    <span className="svg-icon svg-icon-md ml-3">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                            x={11}
                            y={5}
                            width={2}
                            height={14}
                            rx={1}
                          />
                          <path
                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
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

export default FormPhone;
