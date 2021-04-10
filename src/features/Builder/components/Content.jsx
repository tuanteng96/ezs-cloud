import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContent } from "../builderSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeSetting } from "../../../constants/theme";
toast.configure();
// import PropTypes from 'prop-types';

Content.propTypes = {};

function Content(props) {
  const content = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);
  const [width, setWidth] = useState(content[4].Width);
  const handleContent = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const contentChange = {
          Name: "content",
          Width: width,
        };
        const action = editContent(contentChange);
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
  const resetContent = () => {
    return new Promise((resolve) => {
      setLoadingReset(true);
      setTimeout(() => {
        const action = editContent(themeSetting[4]);
        dispatch(action);
        setWidth("fixed");

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
    setWidth(value);
  };
  return (
    <div className="tab-pane" id="kt_builder_content">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Width:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              name="width"
              onChange={onChange}
              value={width}
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
              onClick={() => handleContent()}
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
              onClick={() => resetContent()}
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

export default Content;
