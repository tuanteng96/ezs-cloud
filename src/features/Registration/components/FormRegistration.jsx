import { FastField, Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import GoogleLoginAuth from "../../../components/GoogleLoginAuth";
import * as Yup from "yup";
import {
  registration,
  verify,
  getDomain,
  getSuggest,
  existValidate,
} from "../asyncActions";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "../../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./InputField";
import InputFieldCheckbox from "./InputFieldCheckbox";
import InputFieldDomain from "./InputFieldDomain";
import InputFieldLocation from "./InputFieldLocation";
import InputFieldFullName from "./InputFieldFullName";
import {
  passwordRegExp,
  phoneRegExp,
  usernameRegExp,
} from "../../../helpers/RegExp";
import { handelErrorApi } from "../../../helpers/handleErrorApi";
import { formatPhone84 } from "../../../helpers/globalFormat";
import GroupFieldRadio from "./GroupFieldRadio";
import { _, debounce } from "lodash";
import { setLoadingBrand, setLoadingFName } from "../registrationSlice";
import InputFieldUSN from "./InputFieldUSN";

function FormRegistration(props) {
  const initialValues = {
    FullName: "",
    USN: "",
    RegPhone: "",
    BrandName: "",
    BrandLink: "",
    PackageId: "",
    Pwd: "",
    RePwd: "",
    agree: false,
  };

  const validationSchema = Yup.object().shape({
    FullName: Yup.string().required("Vui lòng nhập họ tên đầy đủ của bạn."),
    USN: Yup.string()
      .required("Vui lòng nhập tên tài khoản.")
      .matches(
        usernameRegExp,
        "Tên tài khoản phải có ít nhất 6 kí tự, nhiều nhất 20 kí tự & không có dấu."
      ),
    RegPhone: Yup.string()
      .required("Vui lòng nhập số điện thoại của bạn.")
      .matches(phoneRegExp, "Số điện thoại không hợp lệ.")
      .min(7, "Số điện thoại phải có ít nhất 7 số.")
      .max(11, "Số điện thoại không thể lớn hơn 11 số."),
    BrandName: Yup.string()
      .required("Vui lòng nhập tên thương hiệu của bạn.")
      .min(3, "Tên thương hiệu phải có ít nhất 3 kí tự.")
      .max(250, "Tên thương hiệu quá dài."),
    BrandLink: Yup.string()
      .required("Vui lòng nhập đường dẫn quản trị của bạn.")
      .min(3, "Đường dẫn thương hiệu phải có ít nhất 3 kí tự.")
      .max(250, "Đường dẫn thương hiệu quá dài.")
    //   .test(
    //     debounce(async function (value) {
    //       const data = {
    //         name: value,
    //         type: "brand",
    //       };
    //       const result = await dispatch(existValidate(data));
    //       const resultUn = unwrapResult(result);
    //       if (resultUn) {
    //         return this.createError({
    //           message: "Đường dẫn đã tồn tại. Vui lòng nhập đường dẫn khác.",
    //         });
    //       } else {
    //         return true;
    //       }
    //     }, 500)
    // )
    ,
    PackageId: Yup.string().required("Vui lòng chọn gói đăng ký."),
    Pwd: Yup.string()
      .required("Vui lòng nhập mật khẩu.")
      .matches(
        passwordRegExp,
        "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ hoa, một số và một ký tự đặc biệt."
      ),
    RePwd: Yup.string()
      .required("Vui lòng xác nhận mật khẩu của bạn.")
      .oneOf([Yup.ref("Pwd"), null], "Mật khẩu không khớp."),
    agree: Yup.boolean().oneOf(
      [true],
      "Bạn phải chấp nhận các điều khoản và điều kiện."
    ),
  });

  const dispatch = useDispatch();
  let history = useHistory();

  const { registrationStatus } = useSelector(
    (state) => state.userRegistration
  );

  const [loadingOTP, setLoadingOTP] = useState(false);

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    const dataRegistration = Object.assign(
      {},
      { ...values, BrandLink: values.BrandLink + ".ezs.vn" }
    );

    const userLogin = {
      Name: values.USN,
      Pwd: values.Pwd,
    };

    dataRegistration.RegPhone = formatPhone84(dataRegistration.RegPhone);

    try {
      const resultAction = await dispatch(registration(dataRegistration));
      const resultData = unwrapResult(resultAction);
      const phoneNumber = `+${resultData.user.RegPhone}`;
      setLoadingOTP(true);
      window.appVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, window.appVerifier)
        .then(async function (e) {
          setLoadingOTP(false);
          const { value: VerifyCode } = await Swal.fire({
            title: "Nhập mã OTP gửi về số điện thoại của bạn",
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            inputValidator: (code) => {
              return new Promise((resolve) => {
                if (code === "") {
                  resolve("Vui lòng nhập mã OTP gửi về số điện thoại của bạn.");
                } else {
                  e.confirm(code)
                    .then(function (result) {
                      resolve();
                    })
                    .catch((error) => {
                      resolve("Mã OTP không chính xác.");
                    });
                }
              });
            },
            showCancelButton: true,
            confirmButtonText: "Xác nhận",
            showLoaderOnConfirm: true,
          });

          if (VerifyCode) {
            try {
              const infoVerify = {
                UserID: resultData.user.Id,
                Secure: resultData.user.Verified.Key,
              };
              const resultVerifyAction = await dispatch(verify(infoVerify));
              const resultLoginAction = await dispatch(getDomain(userLogin));
              const resultLoginData = unwrapResult(resultLoginAction);

              const hrefBrand = resultLoginData.user.Brands[0].Link;
              Swal.fire({
                title: "Đăng ký thành công.",
                icon: "success",
                html: `Đăng kí tài khoản thành công. Vui lòng truy cập <a class="text-danger" href="https://${hrefBrand}/login"><b>https://${hrefBrand}</b></a> để bắt đầu quản lý phần mềm.`,
                showCancelButton: true,
                confirmButtonText: `Quản lý phần mềm`,
                cancelButtonText: `Đóng`,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = `https://${hrefBrand}/login`;
                } else {
                  resetForm();
                }
              });
            } catch (errors) {
              console.log(errors);
              setErrors(handelErrorApi(errors.errors));
            }
          }
        });
    } catch (errors) {
      console.log(errors);
      setErrors(handelErrorApi(errors.errors));
    }
  };

  const debounceSuggestBrand = useCallback(
    debounce(
      (nextValue, form, error) => getSuggestsBrand(nextValue, form, error),
      1000
    ),
    []
  );

  const getSuggestsBrand = async (evt, form, error) => {
    if (error || evt.length < 1) {
      await dispatch(setLoadingBrand(false));
      return false;
    }
    const data = {
      name: evt,
      type: "brand",
    };
    const result = await dispatch(getSuggest(data));
    const resultUn = unwrapResult(result);
    await dispatch(setLoadingBrand(false));
    form.setFieldValue("BrandLink", resultUn[0].split(".")[0]);
  };
  const handleOnChange = (evt, form, error) => {
    debounceSuggestBrand(evt.target.value, form, error);
  };

  const debounceSuggestFullname = useCallback(
    debounce(
      (nextValue, form, error) => getSuggestsFullname(nextValue, form, error),
      1000
    ),
    []
  );

  const getSuggestsFullname = async (evt, form, error) => {
    if (error || evt.length < 1) {
      await dispatch(setLoadingFName(false));
      return false;
    }
    const data = {
      name: evt,
      type: "user",
    };
    const result = await dispatch(getSuggest(data));
    const resultUn = unwrapResult(result);
    await dispatch(setLoadingFName(false));
    form.setFieldValue("USN", resultUn[0]);
  };

  const handleOnChangeName = (evt, form, error) => {
    debounceSuggestFullname(evt.target.value, form, error);
  };

  const handleBrandUSN = debounce(async (value, form, error) => {
    if (error || value.length < 1) {
      return false;
    }
    const data = {
      name: value,
      type: "user",
    };
    const result = await dispatch(existValidate(data));
    const resultUn = unwrapResult(result);
    if (resultUn) {
      form.setFieldTouched("USN", true, false);
      form.setFieldError(
        "USN",
        "Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác."
      );
    }
  }, 500);

  const handleBrandName = debounce(async (value, form, error) => {
    if (error || value.length < 1) {
      return false;
    }
    const data = {
      name: value,
      type: "brand",
    };
    const result = await dispatch(existValidate(data));
    const resultUn = unwrapResult(result);
    if (resultUn) {
      form.setFieldTouched("BrandLink", true, false);
      form.setFieldError(
        "BrandLink",
        "Đường dẫn đã tồn tại. Vui lòng nhập đường dẫn khác."
      );
    }
  }, 500);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form className="form fv-plugins-framework bg-white">
            <div
              className="pb-5"
              data-wizard-type="step-content"
              data-wizard-state="current"
            >
              <h2 className="mb-10 font-weight-700 text-dark">
                Thông tin đăng ký
              </h2>
              {/*begin::Input*/}
              <div className="row">
                <div className="col-xl-6">
                  <FastField
                    name="FullName"
                    component={InputFieldFullName}
                    placeholder="Họ và tên"
                    label="Họ và tên bạn"
                    type="text"
                    desc="Xin vui lòng nhập họ tên của bạn."
                    handleFullname={(e, form, error) =>
                      handleOnChangeName(e, form, error)
                    }
                  />
                </div>
                <div className="col-xl-6">
                  <FastField
                    name="RegPhone"
                    component={InputField}
                    placeholder="Số điện thoại"
                    label="Số điện thoại"
                    type="text"
                    desc="Xin vui lòng nhập số điện thoại của bạn."
                  />
                </div>
              </div>
              <FastField
                name="BrandName"
                component={InputFieldLocation}
                placeholder="Tên thương hiệu"
                label="Tên thương hiệu"
                type="text"
                desc="Xin vui lòng nhập nhập tên Spa của bạn."
                handleLocation={(e, form, error) =>
                  handleOnChange(e, form, error)
                }
              />
              <FastField
                name="BrandLink"
                component={InputFieldDomain}
                placeholder="Đường dẫn quản trị"
                label="Đường quản trị của bạn"
                type="text"
                desc="Đường dẫn truy cập quản lý Spa của bạn."
                handleBrandName={(value, form, error) =>
                  handleBrandName(value, form, error)
                }
              />
              <FastField
                name="USN"
                component={InputFieldUSN}
                placeholder="Tên tài khoản"
                label="Tên tài khoản"
                type="text"
                desc="Sử dụng tài khoản này để đăng nhập hệ thống."
                handleBrandUSN={(e, form, error) =>
                  handleBrandUSN(e, form, error)
                }
              />
              <div className="row">
                <div className="col-xl-6">
                  <FastField
                    name="Pwd"
                    component={InputField}
                    placeholder="Mật khẩu"
                    type="password"
                    label="Mật khẩu"
                  />
                </div>
                <div className="col-xl-6">
                  <FastField
                    name="RePwd"
                    component={InputField}
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    label="Nhập lại mật khẩu"
                  />
                </div>
              </div>
              <FastField
                name="PackageId"
                component={GroupFieldRadio}
                //option={arrPackage}
              />
            </div>
            <div className="border-top mt-5 pt-5">
              <div className="mr-2 mb-5">
                <FastField
                  name="agree"
                  component={InputFieldCheckbox}
                  type="checkbox"
                />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  className={`btn btn-primary font-weight-bolder font-size-h6 py-4 my-3 mr-3 ${
                    registrationStatus === "loading" || loadingOTP === true
                      ? "spinner spinner-white spinner-right disabled"
                      : "px-8"
                  }`}
                >
                  {loadingOTP === false ? "Đăng ký" : "Đang gửi OTP ..."}
                </button>
                <GoogleLoginAuth />
              </div>
              <div id="recaptcha-container"></div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormRegistration;
