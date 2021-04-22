import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import FieldInputPrice from "./FieldInputPrice";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import FieldSwitch from "./FieldSwitch";
import { useSelector } from "react-redux";

FormEditOption.propTypes = {
  onEditOption: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  initial: PropTypes.object.isRequired,
};
FormEditOption.defaultProps = {
  onEditOption: null,
  onHide: null,
  initial: null,
};

function FormEditOption(props) {
  const { onEditOption, onHide, initial } = props;
  const initialValues = initial;
  const validationSchema = Yup.object().shape({
    Title: Yup.string().required("Vui lòng nhập tên Option."),
    DayQty: Yup.string().required("Vui lòng nhập ngày của Option."),
    Price: Yup.string().required("Vui lòng nhập nguyên giá Option."),
    PriceSale: Yup.string().required(
      "Vui lòng nhập nguyên giá khuyến mãi Option."
    ),
    DayBonus: Yup.string().required("Vui lòng nhập thời gian làm thêm."),
  });

  const { addLinkLoading } = useSelector((state) => state.userConfiguration);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onEditOption}
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
                  {initial && initial.Title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onHide}
                >
                  <i aria-hidden="true" className="ki ki-close" />
                </button>
              </div>
              <div
                className={`modal-body ${
                  addLinkLoading === "loading" ? "overlay overlay-block" : ""
                }`}
              >
                {/* overlay overlay-block */}
                <div className="overlay-wrapper form-group-child">
                  <FastField
                    name="Title"
                    component={FieldInput}
                    placeholder="Nhập tên Option"
                    label="Tên Option"
                    desc="Tên hiển thị Option"
                    type="text"
                  />
                  <FastField
                    name="DayQty"
                    component={FieldInput}
                    placeholder="Thời gian sử dụng"
                    label="Thời gian sử dụng"
                    desc="Thời gian sử dụng"
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
                    name="PriceSale"
                    component={FieldInputPrice}
                    placeholder="Giá khuyến mãi"
                    label="Giá khuyến mãi"
                    desc="Số tiền khuyến mãi"
                    type="number"
                    defaultValue={true}
                  />
                  <FastField
                    name="DayBonus"
                    component={FieldInput}
                    placeholder="Thời gian tặng thêm"
                    label="Thời gian tặng thêm"
                    desc="Thời gian tặng thêm"
                    type="text"
                  />
                </div>
                {addLinkLoading === "loading" ? (
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
                    addLinkLoading === "loading"
                      ? "spinner spinner-white spinner-right mr-3 disabled"
                      : ""
                  }`}
                >
                  Cập nhập
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormEditOption;
