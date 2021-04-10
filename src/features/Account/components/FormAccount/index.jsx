import React, { useState } from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputFiled from "../../../../components/custom-fields/InputField";
import InputFieldIcon from "../../../../components/custom-fields/InputFieldIcon";
import InputFieldDate from "../../../../components/custom-fields/InputFieldDate";
import InputFieldRadio from "../../../../components/custom-fields/InputFieldRadio";
import FieldAvatar from "../../../../components/custom-fields/FieldAvatar";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

FormAccount.propTypes = {
  onSubmit: PropTypes.func,
};
FormAccount.defaultProps = {
  onSubmit: null,
};

function FormAccount(props) {
  const initialValues = {
    avatar: "",
    name: "Nguyễn Tài Tuấn",
    birthday: "02/11/1996",
    gender: "0",
    phone: "0971021196",
    email: "tuantengyn@gmail.com",
    address: "Minh Sơn, Triệu Sơn, TP Thanh Hóa",
  };
  const validationSchema = Yup.object().shape({
    avatar: Yup.string(),
    name: Yup.string()
      .required("Vui lòng nhập họ và tên.")
      .min(4, "Họ và tên không hợp lệ."),
    birthday: Yup.date()
      .required("Vui lòng chọn ngày sinh.")
      .max(new Date(), "Ngày sinh không hợp lệ.")
      .nullable(),
    gender: Yup.string().required("Vui lòng chọn giới tính của bạn."),
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại.")
      .matches(/^[0-9]+$/, "Số điện thoại không đúng định dạng.")
      .min(7, "Số điện thoại phải có ít nhất 7 số.")
      .max(10, "Số điện thoại chỉ tối đa 10 số."),
    email: Yup.string()
      .email("Địa chỉ Email không hợp lệ.")
      .required("Vui lòng nhập email của bạn."),
    address: Yup.string()
      .required("Vui lòng nhập địa chỉ")
      .min(6, "Địa chỉ phải có độ dài hơn 6 kí tự."),
  });
  const [loading, setLoading] = useState(false);
  const genderRadio = [
    { key: "Nam", value: "0" },
    { key: "Nữ", value: "1" },
    { key: "Giới tính khác", value: "2" },
  ];

  const handleSubmit = (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Cập nhập thông tin thành công !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }, 1000);
  };

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
            <div className="card card-custom card-stretch">
              {/*begin::Header*/}
              <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                  <h3 className="card-label font-weight-bolder text-dark">
                    Thông tin cá nhân
                  </h3>
                  <span className="text-muted font-weight-bold font-size-sm mt-1">
                    Cập nhật thông tin cá nhân của bạn
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
              {/*begin::Body*/}
              <div className="card-body">
                <FastField
                  name="avatar"
                  component={FieldAvatar}
                  label="Ảnh đại diện"
                  desc="Các loại tệp được phép: png, jpg, jpeg."
                />
                <FastField
                  name="name"
                  component={InputFiled}
                  label="Họ và tên"
                  placeholder="Họ và tên"
                  labelClass="col-xl-3 col-lg-3 col-form-label text-right"
                  divClass="col-lg-9 col-xl-6"
                />
                <FastField
                  name="birthday"
                  component={InputFieldDate}
                  label="Ngày sinh"
                  placeholder="Ngày sinh"
                  desc="Chọn ngày sinh dương lịch của bạn nhé."
                />
                <FastField
                  name="gender"
                  component={InputFieldRadio}
                  label="Giới tính"
                  options={genderRadio}
                />
                <FastField
                  name="phone"
                  component={InputFieldIcon}
                  label="Số điện thoại"
                  placeholder="Số điện thoại"
                  icon="la la-phone"
                />
                <FastField
                  name="email"
                  component={InputFieldIcon}
                  label="Email"
                  placeholder="Email"
                  icon="la la-at"
                />
                <FastField
                  name="address"
                  component={InputFieldIcon}
                  label="Địa chỉ"
                  placeholder="Địa chỉ"
                  icon="flaticon-home"
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

export default FormAccount;
