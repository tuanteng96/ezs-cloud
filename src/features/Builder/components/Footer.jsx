import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFooter } from "../builderSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeSetting } from "../../../constants/theme";
toast.configure();
// import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  const content = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);
  const [width, setWidth] = useState(content[5].Width);
  const [fixed, setFixed] = useState(content[5].Fixed);
  const handleFooter = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const footerChange = {
          Name: "footer",
          Width: width,
          Fixed: fixed,
        };
        const action = editFooter(footerChange);
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
  const resetFooter = () => {
    return new Promise((resolve) => {
      setLoadingReset(true);
      setTimeout(() => {
        const action = editFooter(themeSetting[5]);
        dispatch(action);
        setWidth("fixed");
        setFixed(false);
        toast.success("Thiết lập mặc định thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        setLoadingReset(false);
      }, 1000);
      resolve(true);
    });
  };
  const onChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    const checked = evt.target.checked;
    switch (name) {
      case "width":
        setWidth(value);
        break;
      case "fixed":
        setFixed(checked);
      default:
        break;
    }
  };
  return (
    <div className="tab-pane" id="kt_builder_footer">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Fixed Footer:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <label>
                <input
                  type="checkbox"
                  name="fixed"
                  value={fixed}
                  onChange={onChange}
                  checked={`${fixed === true ? "checked" : ""}`}
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">Set fixed footer</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Width:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              name="width"
              value={width}
              onChange={onChange}
            >
              <option value="fluid">Fluid</option>
              <option value="fixed">Fixed</option>
            </select>
            <div className="form-text text-muted">
              Select layout width type.
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
              onClick={() => handleFooter()}
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
              onClick={() => resetFooter()}
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

export default Footer;
