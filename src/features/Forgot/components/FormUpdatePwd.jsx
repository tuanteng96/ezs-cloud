import React from "react";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSelector } from "react-redux";

FormUpdatePwd.propTypes = {
  onSubmit: PropTypes.func,
};

function FormUpdatePwd(props) {

  const { dataUser } = useSelector((state) => state.userForgot);
  console.log(dataUser);
  const initialValues = {};
  //const validationSchema = Yup.object().shape({});
  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
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

          <div className="fv-plugins-icon-container">
            <div className="row">
              {dataUser &&
                dataUser.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <label className="option form-group">
                      <span className="option-control">
                        <span className="radio">
                          <input
                            type="radio"
                            name="m_option_1"
                          />
                          <span />
                        </span>
                      </span>
                      <span className="option-label">
                        <span className="option-head">
                          <span className="option-title font-weight-700">{item.USN}</span>
                        </span>
                        <span className="option-body">
                          {item.Brands[0].Title} <br />
                          {item.Brands[0].Link}
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <div className="form-group fv-plugins-icon-container">
            <label>Mật khẩu mới</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              name="address1"
              placeholder="Mật khẩu mới"
            />
            <span className="form-text text-muted">
              Please enter your Address.
            </span>
            <div className="fv-plugins-message-container" />
          </div>
          {/*end::Input*/}
          {/*::Input*/}
          <div className="form-group fv-plugins-icon-container">
            <label>Nhập lại mật khẩu mới</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              name="address1"
              placeholder="Nhập lại mật khẩu mới"
            />
            <span className="form-text text-muted">
              Please enter your Address.
            </span>
            <div className="fv-plugins-message-container" />
          </div>
          {/*end::Input*/}
          {/*begin: Wizard Actions*/}
          <div className="d-flex justify-content-between border-top mt-5 pt-10">
            <div></div>
            <div>
              <button
                type="button"
                className="btn btn-primary font-weight-bolder font-size-h6 py-4 my-3 mr-3 px-8"
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
    </Formik>
  );
}

export default FormUpdatePwd;
