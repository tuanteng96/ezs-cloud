import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { editSubHeader } from "../builderSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeSetting } from "../../../constants/theme";
toast.configure();

SubHeader.propTypes = {};

function SubHeader(props) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);
  const [display, setDisplay] = useState(theme[3].Display);
  const [fixedDestop, setFixedDestop] = useState(theme[3].FixedDestop);
  const [fixedMobile, setFixedMobile] = useState(theme[3].FixedMobile);
  const [width, setWidth] = useState(theme[3].Width);
  const [style, setStyle] = useState(theme[3].Style);
  const handleSubheader = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const subheaderChange = {
          Name: "subheader",
          Display: display,
          FixedDestop: fixedDestop,
          FixedMobile: fixedMobile,
          Width: width,
          Style: style,
        };
        const action = editSubHeader(subheaderChange);
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

  const resetSubheader = () => {
    return new Promise((resolve) => {
      setLoadingReset(true);
      setTimeout(() => {
        const action = editSubHeader(themeSetting[3]);
        dispatch(action);
        resetDefaultTheme();

        toast.success("Thiết lập mặc định thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        setLoadingReset(false);
      }, 1000);
      resolve(true);
    });
  };

  const resetDefaultTheme = () => {
    setDisplay(true);
    setFixedDestop(true);
    setFixedMobile(false);
    setWidth("fixed");
    setStyle("transparent");
  };

  const onChange = (evt) => {
    switch (evt.target.name) {
      case "display":
        setDisplay(evt.target.checked);
        break;
      case "fixedDestop":
        setFixedDestop(evt.target.checked);
        break;
      case "fixedMobile":
        setFixedMobile(evt.target.checked);
        break;
      case "width":
        setWidth(evt.target.value);
        break;
      case "style":
        setStyle(evt.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="tab-pane" id="kt_builder_subheader">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Display Subheader:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  name="display"
                  checked={display === true ? "checked" : ""}
                  onChange={onChange}
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">Display subheader</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Fixed Subheader:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  name="fixedDestop"
                  checked={fixedDestop === true ? "checked" : ""}
                  onChange={onChange}
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">
              Enable fixed(sticky) subheader. Requires
              <code>Solid</code>subheader style.
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Fixed Mobile Subheader:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  name="fixedMobile"
                  checked={fixedMobile === true ? "checked" : ""}
                  onChange={onChange}
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">
              Enable fixed(sticky) mobile subheader. Requires
              <code>Solid</code>subheader style.
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Width:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              value={width}
              onChange={onChange}
              name="width"
            >
              <option value="fluid">Fluid</option>
              <option value="fixed">Fixed</option>
            </select>
            <div className="form-text text-muted">
              Select layout width type.
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Subheader Style:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              value={style}
              onChange={onChange}
              name="style"
            >
              <option value="transparent">Transparent</option>
              <option value="solid">Solid</option>
            </select>
            <div className="form-text text-muted">Select subheader style</div>
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
              onClick={() => handleSubheader()}
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
              onClick={() => resetSubheader()}
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

export default SubHeader;
