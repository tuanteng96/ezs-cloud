import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSetting } from "../../../constants/theme";
import { editPage } from "../builderSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
//import PropTypes from 'prop-types';

Page.propTypes = {};

function Page(props) {
  const page = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);
  const [loader, setLoader] = useState(page[1].Loader);

  const handlePage = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const pageChange = {
          Name: "page",
          Loader: loader,
        };
        const action = editPage(pageChange);
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

  const resetPage = () => {
    return new Promise((resolve) => {
      setLoadingReset(true);
      setTimeout(() => {
        const action = editPage(themeSetting[1]);
        dispatch(action);
        setLoader("spinner");

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
    setLoader(value);
  };
  return (
    <div className="tab-pane" id="kt_builder_page">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Page Loader:
          </label>
          <div className="col-lg-9 col-xl-4">
            <select
              className="form-control form-control-solid"
              value={loader}
              onChange={onChange}
            >
              <option value="disabled">Disabled</option>
              <option value="spinner">Spinner</option>
            </select>
            <div className="form-text text-muted">
              Select page loading indicator
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
              onClick={() => handlePage()}
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
              onClick={() => resetPage()}
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

export default Page;
