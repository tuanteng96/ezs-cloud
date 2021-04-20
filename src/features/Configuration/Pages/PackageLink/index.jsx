import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import MainLayout from "../../../../layouts/MainLayout";
import { PATH } from "../../../../constants/paths";
import { Link } from "react-router-dom";
import SubHeaderLayout from "../../../../layouts/SubHeaderLayout";
import { getListLink, getPackage, editPackage } from "../../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TableLink from "../../components/TableLink";
import { setChecked, setLinkCurrent } from "../../configurationSlice";
import { handelErrorApiSwal } from "../../../../helpers/handleErrorApi";
import SkeletonLinkPackage from "../../components/Skeleton/SkeletonLinkPackage";

PackageLink.propTypes = {};

function PackageLink(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const [currentPackage, setCurrentPackage] = useState({});
  const [arrLink, setArrLink] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    try {
      const result = await dispatch(getListLink());
      const resultUn = unwrapResult(result);
      const resultP = await dispatch(getPackage());
      const resultPUn = unwrapResult(resultP);
      const currentPackage = resultPUn.find(
        (item) => item.Id === match.params.Id
      );

      const arrayLink = resultUn.map((item) => {
        const itemCheck = currentPackage.Links
          ? currentPackage.Links.some((link) => link.Link === item.Link)
          : false;
        return {
          ...item,
          isCheck: itemCheck,
        };
      });
      setCurrentPackage(currentPackage);
      setArrLink(arrayLink);
      dispatch(setLinkCurrent(arrayLink));
    } catch (error) {
      handelErrorApiSwal(error);
    }
  }, [dispatch]);

  const { linkCurren, linkLoading } = useSelector(
    (state) => state.userConfiguration
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "STT",
        Cell: ({ row }) => row.index + 1,
        width: 60,
        textAlign: "center",
      },
      {
        Header: "Tên Link",
        accessor: "Title",
        width: "auto",
      },
      {
        Header: "Link",
        accessor: "Link",
        width: "auto",
      },
      {
        Header: "Thao tác",
        textAlign: "center",
        width: 135,
        //Filter: SelectColumnFilter,
        Cell: ({ cell }) => {
          return (
            <div className="d-flex justify-content-center">
              <span className="switch switch-sm">
                <label>
                  <input
                    type="checkbox"
                    name="isChecked"
                    value={cell.row.original.Id}
                    defaultChecked={
                      cell.row.original.isCheck === true ? true : false
                    }
                    onChange={handleOnChange}
                  />
                  <span></span>
                </label>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const handleOnChange = (evt) => {
    const Id = evt.target.value;
    const isCheck = evt.target.checked;
    dispatch(
      setChecked({
        Id: Id,
        isCheck: isCheck,
      })
    );
  };

  const submitUpdate = async () => {
    setIsLoading(true);
    const Links = linkCurren.filter((item) => item.isCheck === true);
    const itemPackage = {
      Id: currentPackage.Id,
      Links: Links,
    };

    try {
      const result = await dispatch(editPackage(itemPackage));
      const resultUn = unwrapResult(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Cập nhập thành công !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handelErrorApiSwal(error);
    }
  };

  const handleStatus = (status) => {
    console.log(status);
  };

  return (
    <MainLayout>
      <div className="content d-flex flex-column flex-column-fluid">
        <SubHeaderLayout>
          {/*begin::Info*/}
          <div className="d-flex align-items-center flex-wrap mr-1">
            {/*begin::Mobile Toggle*/}
            <button
              className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
              id="kt_subheader_mobile_toggle"
            >
              <span />
            </button>
            {/*end::Mobile Toggle*/}
            {/*begin::Page Heading*/}
            <div className="d-flex align-items-baseline flex-wrap mr-5">
              {/*begin::Page Title*/}
              <h5 className="text-dark font-weight-800 my-1 mr-5">
                {currentPackage && currentPackage.Name}
              </h5>
              {/*end::Page Title*/}
              {/*begin::Breadcrumb*/}
              <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                <li className="breadcrumb-item text-muted">
                  <Link to="/" className="text-muted">
                    Trang chủ
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link to={`${PATH.CONFIGURATION}`} className="text-muted">
                    Cấu hình
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link
                    to={`${PATH.CONFIGURATION}/quan-ly-goi`}
                    className="text-muted"
                  >
                    Quản lý gói
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link
                    to={`${PATH.CONFIGURATION}/quan-ly-link/${
                      currentPackage && currentPackage.Id
                    }/link`}
                    className="text-muted"
                  >
                    {currentPackage && currentPackage.Name}
                  </Link>
                </li>
              </ul>
              {/*end::Breadcrumb*/}
            </div>
            {/*end::Page Heading*/}
          </div>
          {/*end::Info*/}
        </SubHeaderLayout>
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <span className="card-icon">
                    <i className="flaticon2-pie-chart-2 text-primary" />
                  </span>
                  <h3 className="card-label font-weight-800">
                    Danh sách Link gói {currentPackage && currentPackage.Name}
                  </h3>
                </div>
                <div className="card-toolbar">
                  {/*begin::Dropdown*/}
                  <div
                    className="dropdown dropdown-inline"
                    data-toggle="tooltip"
                    title
                    data-placement="top"
                    data-original-title="Lọc theo trạng thái"
                  >
                    <button
                      type="button"
                      className="btn btn-light font-weight-bolder"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="svg-icon svg-icon-md">
                        {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-03-15-144509/theme/demo1/dist/../src/media/svg/icons/Code/Compiling.svg*/}
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
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                      Trạng thái
                    </button>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right p-0 m-0">
                      {/*begin::Navigation*/}
                      <ul className="navi navi-hover">
                        <li className="navi-header font-weight-bold py-4">
                          <span className="font-size-lg">Chọn trạng thái</span>
                          <i
                            className="flaticon2-information icon-md text-muted"
                            data-toggle="tooltip"
                            data-placement="right"
                            title
                            data-original-title="Click to learn more..."
                          />
                        </li>
                        <li className="navi-separator mb-3 opacity-70" />
                        <li
                          className="navi-item"
                          onClick={() => handleStatus("ALL")}
                        >
                          <div className="navi-link cursor-pointer">
                            <span className="navi-text">
                              <span className="label label-xl label-inline label-light-primary">
                                Tất cả
                              </span>
                            </span>
                          </div>
                        </li>
                        <li
                          className="navi-item"
                          onClick={() => handleStatus("false")}
                        >
                          <div className="navi-link cursor-pointer">
                            <span className="navi-text">
                              <span className="label label-xl label-inline label-light-danger">
                                Chưa chọn
                              </span>
                            </span>
                          </div>
                        </li>
                        <li
                          className="navi-item"
                          onClick={() => handleStatus("true")}
                        >
                          <div className="navi-link cursor-pointer">
                            <span className="navi-text">
                              <span className="label label-xl label-inline label-light-success">
                                Đã chọn
                              </span>
                            </span>
                          </div>
                        </li>
                        <li className="mb-3 opacity-70" />
                      </ul>
                      {/*end::Navigation*/}
                    </div>
                  </div>
                  {/*end::Dropdown*/}
                  {/*begin::Dropdown*/}
                  <div className="dropdown dropdown-inline mr-2"></div>
                  {/*end::Dropdown*/}
                  {/*begin::Button*/}
                  <button
                    type="button"
                    className={`btn btn-primary font-weight-bolder ${
                      isLoading
                        ? "spinner spinner-white spinner-right disabled"
                        : ""
                    }`}
                    onClick={() => submitUpdate()}
                  >
                    <span className="svg-icon svg-icon-md">
                      {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Files/File.svg*/}
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
                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <rect
                            fill="#000000"
                            x={6}
                            y={11}
                            width={9}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#000000"
                            x={6}
                            y={15}
                            width={5}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                    Cập nhập
                  </button>
                  {/*end::Button*/}
                </div>
              </div>
              {/* Modal ADD*/}
              <div className="card-body">
                <div className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded">
                  {/*begin: Datatable*/}
                  {linkLoading === "success" && (
                    <TableLink columns={columns} data={arrLink} />
                  )}
                  {linkLoading === "loading" && <SkeletonLinkPackage />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PackageLink;
