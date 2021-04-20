import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import FieldInputPrice from "./FieldInputPrice";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import FieldSwitch from "./FieldSwitch";
import { useSelector } from "react-redux";

FormEditPackage.propTypes = {
  onEditPackage: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  initiaValue: PropTypes.object.isRequired,
};
FormEditPackage.defaultProps = {
  onEditPackage: null,
  onHide: null,
  initiaValue: {},
};

function FormEditPackage(props) {
  const { onEditPackage, onHide, initiaValue } = props;

  const initialValues = initiaValue;
  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(3, "Tài gói quá ngắn - tối thiểu phải có 3 ký tự.")
      .max(50, "Tài gói quá dài - nhiều nhất 50 ký tự.")
      .required("Vui lòng nhập tên gói."),
    Price: Yup.string().required("Vui lòng nhập tiền nguyên giá.").nullable(),
  });

  const { editPackageLoading } = useSelector(
    (state) => state.userConfiguration
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onEditPackage}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form className="w-100">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title font-weight-800"
                  id="exampleModalLabel"
                >
                  Gói{" "}
                  <b className="font-weight-800 text-success">
                    {initiaValue.Name}
                  </b>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i aria-hidden="true" className="ki ki-close" />
                </button>
              </div>
              <div
                className={`modal-body ${
                  editPackageLoading === "loading"
                    ? "overlay overlay-block"
                    : ""
                }`}
              >
                {/* overlay overlay-block */}
                <div className="overlay-wrapper">
                  <FastField
                    name="Name"
                    component={FieldInput}
                    placeholder="Nhập tên gói"
                    label="Tên gói"
                    desc="Tên hiển thị gói"
                    type="text"
                  />

                  <FastField
                    name="Price"
                    component={FieldInputPrice}
                    placeholder="Nhập nguyên giá"
                    label="Nguyên giá"
                    desc="Số tiền nguyên giá"
                    type="number"
                    defaultValue={true}
                  />

                  <FastField
                    name="IsPublic"
                    component={FieldSwitch}
                    label="Trạng thái"
                    type="checkbox"
                  />
                </div>
                {editPackageLoading === "loading" ? (
                  <div className="overlay-layer bg-dark-o-10">
                    <div className="spinner spinner-primary"></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light-primary font-weight-bold"
                  onClick={onHide}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary font-weight-bold ${
                    editPackageLoading === "loading"
                      ? "spinner spinner-white spinner-right mr-3 disabled"
                      : ""
                  }`}
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormEditPackage;
