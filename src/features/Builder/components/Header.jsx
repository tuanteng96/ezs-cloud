import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeSetting } from "../../../constants/theme";
import { editHeader } from "../builderSlice";
toast.configure();
// import PropTypes from 'prop-types';

Header.propTypes = {};

function Header(props) {
  const themeHeader = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingReset, setloadingReset] = useState(false);
  const [desktopFixed, setDesktopFixed] = useState(themeHeader[2].DesktopFixed);
  const [mobileFixed, setMobileFixed] = useState(themeHeader[2].MobileFixed);
  const [width, setWidth] = useState(themeHeader[2].Width);

  const onChange = (evt) => {
    switch (evt.target.name) {
      case "desktopFixed":
        setDesktopFixed(evt.target.checked);
        break;
      case "mobileFixed":
        setMobileFixed(evt.target.checked);
        break;
      case "widthFixed":
        setWidth(evt.target.value);
        break;
      default:
        break;
    }
  };

  const handleHeader = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const headerChange = {
          Name: "header",
          DesktopFixed: desktopFixed,
          MobileFixed: mobileFixed,
          Width: width,
        };
        const action = editHeader(headerChange);
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

  const resetHeader = () => {
    return new Promise((resolve) => {
      setloadingReset(true);
      setTimeout(() => {
        const action = editHeader(themeSetting[2]);
        dispatch(action);
        resetDefaultTheme();

        toast.success("Thiết lập mặc định thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        setloadingReset(false);
      }, 1000);
      resolve(true);
    });
  };

  const resetDefaultTheme = () => {
    setDesktopFixed(true);
    setMobileFixed(true);
    setWidth("fluid");
  };

  return (
    <div className="tab-pane" id="kt_builder_header">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Desktop Fixed Header:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  value={desktopFixed}
                  checked={desktopFixed === true ? "checked" : ""}
                  onChange={onChange}
                  name="desktopFixed"
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">
              Enable fixed header for desktop mode
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Mobile Fixed Header:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  value={desktopFixed}
                  defaultChecked={mobileFixed === true ? "checked" : ""}
                  onChange={onChange}
                  name="mobileFixed"
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">
              Enable fixed header for mobile mode
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Header Width:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              value={width}
              onChange={onChange}
              name="widthFixed"
            >
              <option value="fluid">Fluid</option>
              <option value="fixed">Fixed</option>
            </select>
            <div className="form-text text-muted">
              Select header width type.
            </div>
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
              onClick={() => handleHeader()}
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
              onClick={() => resetHeader()}
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

export default Header;
