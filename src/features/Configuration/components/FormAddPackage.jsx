import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import FieldInputPrice from "./FieldInputPrice";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import FieldSwitch from "./FieldSwitch";
import { useSelector } from "react-redux";

FormAddPackage.propTypes = {
  onAddPackage: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};
FormAddPackage.defaultProps = {
  onAddPackage: null,
  onHide: null,
};

function FormAddPackage(props) {
  const { onAddPackage, onHide } = props;
  const initialValues = {
    Name: "",
    Price: "",
    IsPublic: true,
    NumOfMembers: "",
    NumOfUsers: "",
    NumOfLocations: "",
  };
  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(3, "Tài gói quá ngắn - tối thiểu phải có 3 ký tự.")
      .max(50, "Tài gói quá dài - nhiều nhất 50 ký tự.")
      .required("Vui lòng nhập tên gói."),
    Price: Yup.string().required("Vui lòng nhập tiền nguyên giá.").nullable(),
    IsPublic: Yup.bool().required("Vui lòng chọn trạng thái"),
  });

  const { addPackageLoading } = useSelector((state) => state.userConfiguration);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onAddPackage}
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
                  Tạo gói mới
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
                  addPackageLoading === "loading" ? "overlay overlay-block" : ""
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
                    name="NumOfMembers"
                    component={FieldInput}
                    placeholder="Số lượng Member"
                    label="Số lượng Member"
                    desc="Số lượng Member"
                    type="text"
                  />

                  <FastField
                    name="NumOfUsers"
                    component={FieldInput}
                    placeholder="Số lượng Users"
                    label="Số lượng Users"
                    desc="Số lượng Users"
                    type="text"
                  />

                  <FastField
                    name="NumOfLocations"
                    component={FieldInput}
                    placeholder="Số chi nhánh"
                    label="Số chi nhánh"
                    desc="Số chi nhánh"
                    type="text"
                  />

                  <FastField
                    name="IsPublic"
                    component={FieldSwitch}
                    label="Trạng thái"
                    type="checkbox"
                  />
                </div>
                {addPackageLoading === "loading" ? (
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
                    addPackageLoading === "loading"
                      ? "spinner spinner-white spinner-right mr-3 disabled"
                      : ""
                  }`}
                >
                  Thêm mới
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormAddPackage;
