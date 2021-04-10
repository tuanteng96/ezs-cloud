import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MainLayout from "../../../../layouts/MainLayout";
import SubHeaderLayout from "../../../../layouts/SubHeaderLayout";
import { deleteStaff, fetchStaff } from "../../asyncActions";
import ItemStaff from "../components/ItemStaff";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import PropTypes from 'prop-types';

Main.propTypes = {};

function Main(props) {
  const dispatch = useDispatch();
  const { staffs, fetchStatus, fetchError } = useSelector(
    (state) => state.staffs
  );

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchStaff());
    }
  }, [fetchStatus, dispatch]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Bạn không thể hoàn lại nếu thực hiện xóa!",
      icon: "warning",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "Có, Xóa nó!",
      cancelButtonText: "Không, Hủy bỏ!",
      reverseButtons: true,
    }).then(function (result) {
      if (result.value) {
        async function fetchDelete() {
          try {
            const resultAction = await dispatch(deleteStaff(item.id));
            unwrapResult(resultAction);
            Swal.fire({
              title: "Đã xóa!",
              text: "Nhân viên đã được xóa thành công.",
              icon: "success"
            });
          } catch (error) {
            Swal.fire(
              "Xóa không thành công!",
              error.message,
              "error"
            );
          }
        }
        fetchDelete();
      }
    });
  };

  return (
    <MainLayout>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <SubHeaderLayout>
          <div className="d-flex align-items-center flex-wrap mr-2">
            {/*begin::Title*/}
            <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">
              Danh sách nhân viên
            </h5>
            {/*end::Title*/}
            {/*begin::Separator*/}
            <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-300" />
            {/*end::Separator*/}
            {/*begin::Search Form*/}
            <div className="d-flex align-items-center" id="kt_subheader_search">
              <span
                className="text-dark-50 font-weight-bold"
                id="kt_subheader_total"
              >
                450 Nhân viên
              </span>
              <form className="ml-5">
                <div className="input-group input-group-sm bg-white border-0 rounded min-w-175px">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    id="kt_subheader_search_form"
                    placeholder="Tìm kiếm..."
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-0">
                      <span className="svg-icon">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
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
                              d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/*end::Search Form*/}
            {/*begin::Group Actions*/}
            <div
              className="d-flex- align-items-center flex-wrap mr-2 d-none"
              id="kt_subheader_group_actions"
            >
              <div className="text-dark-50 font-weight-bold">
                <span id="kt_subheader_group_selected_rows">23</span>Selected:
              </div>
              <div className="d-flex ml-6">
                <div
                  className="dropdown mr-2"
                  id="kt_subheader_group_actions_status_change"
                >
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bolder btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Update Status
                  </button>
                  <div className="dropdown-menu p-0 m-0 dropdown-menu-sm">
                    <ul className="navi navi-hover pt-3 pb-4">
                      <li className="navi-header font-weight-bolder text-uppercase text-primary font-size-lg pb-0">
                        Change status to:
                      </li>
                      <li className="navi-item">
                        <a
                          href="#"
                          className="navi-link"
                          data-toggle="status-change"
                          data-status={1}
                        >
                          <span className="navi-text">
                            <span className="label label-light-success label-inline font-weight-bold">
                              Approved
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a
                          href="#"
                          className="navi-link"
                          data-toggle="status-change"
                          data-status={2}
                        >
                          <span className="navi-text">
                            <span className="label label-light-danger label-inline font-weight-bold">
                              Rejected
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a
                          href="#"
                          className="navi-link"
                          data-toggle="status-change"
                          data-status={3}
                        >
                          <span className="navi-text">
                            <span className="label label-light-warning label-inline font-weight-bold">
                              Pending
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a
                          href="#"
                          className="navi-link"
                          data-toggle="status-change"
                          data-status={4}
                        >
                          <span className="navi-text">
                            <span className="label label-light-info label-inline font-weight-bold">
                              On Hold
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="btn btn-light-success font-weight-bolder btn-sm mr-2"
                  id="kt_subheader_group_actions_fetch"
                  data-toggle="modal"
                  data-target="#kt_datatable_records_fetch_modal"
                >
                  Fetch Selected
                </button>
                <button
                  className="btn btn-light-danger font-weight-bolder btn-sm mr-2"
                  id="kt_subheader_group_actions_delete_all"
                >
                  Delete All
                </button>
              </div>
            </div>
            {/*end::Group Actions*/}
          </div>
          <div className="d-flex align-items-center">
            {/*begin::Button*/}
            <a
              href="/staff/add"
              className="font-weight-bolder font-size-sm px-5 btn-fixed-height"
            />
            {/*end::Button*/}
            {/*begin::Button*/}
            <Link
              to="/staff/add"
              className="btn btn-bg-white btn-text-dark-50 btn-hover-text-primary btn-icon-primary btn-fixed-height font-weight-bolder font-size-sm px-5 ml-2"
            >
              Thêm mới
            </Link>
            {/*end::Button*/}
            {/*begin::Dropdown*/}
            <div
              className="dropdown dropdown-inline ml-2"
              data-toggle="tooltip"
              title
              data-placement="top"
              data-original-title="Bộ lọc nhân viên"
            >
              <a
                href="javascript:;"
                className="btn btn-fixed-height btn-primary font-weight-bolder font-size-sm px-5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="svg-icon svg-icon-md">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Files/File.svg*/}
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
                Bộ lọc
              </a>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0">
                {/*begin::Navigation*/}
                <ul className="navi navi-hover">
                  <li className="navi-header font-weight-bold py-4">
                    <span className="font-size-lg">Chọn cấp bậc :</span>
                    <i
                      className="flaticon2-information icon-md text-muted"
                      data-toggle="tooltip"
                      data-placement="right"
                      title
                      data-original-title="Chọn cấp bậc nhân viên bạn mong muốn."
                    />
                  </li>
                  <li className="navi-separator mb-3 opacity-70" />
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-text">
                        <span className="label label-xl label-inline label-light-primary">
                          Orders
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-text">
                        <span className="label label-xl label-inline label-light-danger">
                          Reports
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-text">
                        <span className="label label-xl label-inline label-light-warning">
                          Tasks
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-text">
                        <span className="label label-xl label-inline label-light-success">
                          Events
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-text">
                        <span className="label label-xl label-inline label-light-dark">
                          Members
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-separator mt-3 opacity-70" />
                  <li className="navi-footer py-4">
                    <a
                      className="btn btn-primary font-weight-bold btn-sm px-5"
                      href="#"
                    >
                      <i className="ki ki-plus icon-sm" />
                      Create
                    </a>
                  </li>
                </ul>
                {/*end::Navigation*/}
              </div>
            </div>
            {/*end::Dropdown*/}
          </div>
        </SubHeaderLayout>

        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Row*/}
            <div className="row">
              {fetchStatus === "success" ? (
                <>
                  {staffs &&
                    staffs.map((item, index) => (
                      <div
                        className="col-xxl-3 col-xl-6 col-md-6 col-sm-6"
                        key={index}
                      >
                        <ItemStaff
                          staff={item}
                          handleDelete={() => handleDelete(item)}
                        />
                      </div>
                    ))}
                </>
              ) : (
                <div>Loading</div>
              )}
            </div>
            {/*end::Row*/}
            {/*begin::Pagination*/}
            <div className="card card-custom">
              <div className="card-body">
                {/*begin::Pagination*/}
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex flex-wrap mr-3">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
                    >
                      <i className="ki ki-bold-double-arrow-back icon-xs" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
                    >
                      <i className="ki ki-bold-arrow-back icon-xs" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      ...
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      23
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1"
                    >
                      24
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      25
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      26
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      27
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      28
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    >
                      ...
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
                    >
                      <i className="ki ki-bold-arrow-next icon-xs" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
                    >
                      <i className="ki ki-bold-double-arrow-next icon-xs" />
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <select
                      className="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary"
                      style={{ width: "75px" }}
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    <span className="text-muted">
                      Showing 10 of 150 records
                    </span>
                  </div>
                </div>
                {/*end:: Pagination*/}
              </div>
            </div>
            {/*end::Pagination*/}
          </div>
          {/*end::Container*/}
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
