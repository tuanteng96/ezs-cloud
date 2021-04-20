import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import FieldInputPrice from "./FieldInputPrice";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import FieldSwitch from "./FieldSwitch";
import { useSelector } from "react-redux";

FormAddLink.propTypes = {
  onAddLink: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};
FormAddLink.defaultProps = {
  onAddLink: null,
  onHide: null,
};

function FormAddLink(props) {
  const { onAddLink, onHide } = props;
  const initialValues = {
    Title: "",
    Link: "",
  };
  const validationSchema = Yup.object().shape({
    Title: Yup.string().required("Vui lòng nhập tên Link."),
    Link: Yup.string().required("Vui lòng nhập đường dẫn Link."),
  });

  const { addLinkLoading } = useSelector((state) => state.userConfiguration);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onAddLink}
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
                  Tạo Link mới
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
                    placeholder="Nhập tên Link"
                    label="Tên Link"
                    desc="Tên hiển thị Link"
                    type="text"
                  />

                  <FastField
                    name="Link"
                    component={FieldInput}
                    placeholder="Nhập đường dẫn Link"
                    label="Đường dẫn Link"
                    desc="Đường dẫn hiển thị Link"
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

export default FormAddLink;
