import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSetting } from "../../../constants/theme";
import { editTheme } from "../builderSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
// import PropTypes from 'prop-types';

Theme.propTypes = {};

function Theme(props) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);
  const [HeaderTheme, setHeaderTheme] = useState(theme[0].HeaderTheme);
  const [HeaderMenuTheme, setHeaderMenuTheme] = useState(
    theme[0].HeaderMenuTheme
  );
  const [LogoBarTheme, setLogoBarTheme] = useState(theme[0].LogoBarTheme);
  const [AsideTheme, setAsideTheme] = useState(theme[0].AsideTheme);

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case "HeaderTheme":
        setHeaderTheme(value);
        break;
      case "HeaderMenuTheme":
        setHeaderMenuTheme(value);
        break;
      case "LogoBarTheme":
        setLogoBarTheme(value);
        break;
      case "AsideTheme":
        setAsideTheme(value);
        break;
      default:
        break;
    }
  };

  const handleTheme = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const themeChange = {
          Name: "theme",
          HeaderTheme: HeaderTheme,
          HeaderMenuTheme: HeaderMenuTheme,
          LogoBarTheme: LogoBarTheme,
          AsideTheme: AsideTheme,
        };
        const action = editTheme(themeChange);
        dispatch(action);

        toast.success("Thay đổi thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        setLoading(false);
      }, 1000);
      resolve(true);
    });
  };

  const resetTheme = () => {
    return new Promise((resolve) => {
      setLoadingReset(true);
      setTimeout(() => {

        const action = editTheme(themeSetting[0]);
        dispatch(action);
        resetDefaultTheme();

        toast.success("Thiết lập mặc định thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        setLoadingReset(false);

      }, 1000);
      
      resolve(true);
    })
  };

  const resetDefaultTheme = () => {
    setHeaderTheme("ligth");
    setHeaderMenuTheme("ligth");
    setLogoBarTheme("ligth");
    setAsideTheme("ligth");
  };
  
  return (
    <div className="tab-pane active" id="kt_builder_themes">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Header Theme:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              value={HeaderTheme}
              onChange={onChange}
              name="HeaderTheme"
            >
              <option value="light">Light (default)</option>
              <option value="dark">Dark</option>
            </select>
            <div className="form-text text-muted">Select header theme</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Header Menu Theme:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              onChange={onChange}
              name="HeaderMenuTheme"
              value={HeaderMenuTheme}
            >
              <option value="light">Light (default)</option>
              <option value="dark">Dark</option>
            </select>
            <div className="form-text text-muted">Select header theme</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Logo Bar Theme:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              onChange={onChange}
              name="LogoBarTheme"
              value={LogoBarTheme}
            >
              <option value="light">Light (default)</option>
              <option value="dark">Dark</option>
            </select>
            <div className="form-text text-muted">Select logo bar theme</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Aside Theme:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              name="AsideTheme"
              onChange={onChange}
              value={AsideTheme}
            >
              <option value="light">Light (default)</option>
              <option value="dark">Dark</option>
            </select>
            <div className="form-text text-muted">Select left aside theme</div>
          </div>
        </div>
      </div>
      {/*begin::Footer*/}
      <div className="card-footer">
        <div className="row">
          <div className="offset-lg-3 col-lg-9">
            <button
              type="button"
              name="builder_submit"
              data-demo="demo1"
              className={`btn btn-primary font-weight-bold mr-2 ${
                loading && "spinner spinner-right spinner-white pr-15 disabled"
              }`}
              onClick={() => handleTheme()}
            >
              Cập nhập
            </button>
            <button
              type="button"
              name="builder_reset"
              className={`btn btn-clean font-weight-bold ${
                loadingReset &&
                "spinner spinner-right spinner-primary pr-15 disabled"
              }`}
              onClick={() => resetTheme()}
            >
              Thiết lập mặc định
            </button>
          </div>
        </div>
      </div>
      {/*end::Footer*/}
    </div>
  );
}

export default Theme;
