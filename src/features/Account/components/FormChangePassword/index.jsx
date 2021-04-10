import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FastField, Form, Formik } from "formik";
import InputFiled from "../../../../components/custom-fields/InputField";
toast.configure();

FormChangePasswod.propTypes = {
  onSubmit: PropTypes.func,
};
FormChangePasswod.defaultProps = {
  onSubmit: null,
};

function FormChangePasswod(props) {
  const initialValues = {
    PWD: "",
    NewPWD: "",
    RePWD: "",
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      //await auth.passwordUpdate(values.oldPassword, values.passwordOne);
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Cập nhập thông tin thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        resetForm({});
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    PWD: Yup.string().required("Vui lòng nhập mật khẩu hiện cũ."),
    NewPWD: Yup.string().required("Vui lòng nhập mật khẩu mới."),
    RePWD: Yup.string().required("Vui lòng nhập lại mật khẩu mới").oneOf(
      [Yup.ref("NewPWD"), null],
      "Nhập lại mật khẩu không chính xác."
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        //do something here ...
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <div className="card card-custom">
              {/*begin::Header*/}
              <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                  <h3 className="card-label font-weight-bolder text-dark">
                    Đổi mật khẩu
                  </h3>
                  <span className="text-muted font-weight-bold font-size-sm mt-1">
                    Thay đổi mật khẩu tài khoản của bạn
                  </span>
                </div>
                <div className="card-toolbar">
                  <button
                    type="submit"
                    className={`btn btn-primary font-weight-bolder ${
                      loading && "spinner spinner-white spinner-right disabled"
                    }`}
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Form*/}
              <div className="card-body">
                {/*begin::Alert*/}
                <div
                  className="alert alert-custom alert-light-danger fade show mb-10"
                  role="alert"
                >
                  <div className="alert-icon">
                    <span className="svg-icon svg-icon-3x svg-icon-danger">
                      {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Code/Info-circle.svg*/}
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
                          <rect x={0} y={0} width={24} height={24} />
                          <circle
                            fill="#000000"
                            opacity="0.3"
                            cx={12}
                            cy={12}
                            r={10}
                          />
                          <rect
                            fill="#000000"
                            x={11}
                            y={10}
                            width={2}
                            height={7}
                            rx={1}
                          />
                          <rect
                            fill="#000000"
                            x={11}
                            y={7}
                            width={2}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                  <div className="alert-text font-weight-bold">
                    Cảnh báo mật khẩu giúp bảo vệ chống lại các cuộc tấn công
                    lừa đảo.
                    <br />
                    Vui lòng ghi nhớ mật khẩu mới của bạn,
                    <br />
                    Nếu gặp vấn đề gì vui lòng liên hệ chúng tôi.
                  </div>
                  <div className="alert-close">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="ki ki-close" />
                      </span>
                    </button>
                  </div>
                </div>
                {/*end::Alert*/}
                <FastField
                  name="PWD"
                  component={InputFiled}
                  label="Mật khẩu"
                  type="password"
                  placeholder="Nhập mật khẩu hiện tại"
                  labelClass="col-xl-3 col-lg-3 col-form-label text-alert"
                  divClass="col-lg-9 col-xl-6"
                />
                <FastField
                  name="NewPWD"
                  component={InputFiled}
                  type="password"
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                  labelClass="col-xl-3 col-lg-3 col-form-label text-alert"
                  divClass="col-lg-9 col-xl-6"
                />
                <FastField
                  name="RePWD"
                  component={InputFiled}
                  type="password"
                  label="Nhập lại mật khẩu mới"
                  placeholder="Nhập lại mật khẩu mới"
                  labelClass="col-xl-3 col-lg-3 col-form-label text-alert"
                  divClass="col-lg-9 col-xl-6"
                />
              </div>
              {/*end::Form*/}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormChangePasswod;
