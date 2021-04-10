import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import SubHeaderLayout from "../../layouts/SubHeaderLayout";
import { login } from "../Login/asyncActions";
// import PropTypes from 'prop-types';

const Dashboard = (props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMyAPI() {
      const values = {
        Name: "nguyentuandz",
        Pwd: "abc@123456A",
      };
      const resultAction = await dispatch(login(values));
      const resultData = unwrapResult(resultAction);
      console.log(resultData);
    }
    fetchMyAPI();
  },[])

  return (
    <MainLayout>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {/*begin::Subheader*/}
        <SubHeaderLayout>
          {/*begin::Info*/}
          <div className="d-flex align-items-center flex-wrap mr-1">
            {/*begin::Page Heading*/}
            <div className="d-flex align-items-baseline flex-wrap mr-5">
              {/*begin::Page Title*/}
              <h5 className="text-dark font-weight-bold my-1 mr-5">
                Dashboard
              </h5>
              {/*end::Page Title*/}
            </div>
            {/*end::Page Heading*/}
          </div>
          {/*end::Info*/}
          {/*begin::Toolbar*/}
          <div className="d-flex align-items-center flex-wrap">
            {/*begin::Daterange*/}
            <a
              href="#"
              className="btn btn-fixed-height btn-bg-white btn-text-dark-50 btn-hover-text-primary btn-icon-primary font-weight-bolder font-size-sm px-5 my-1 mr-3"
              id="kt_dashboard_daterangepicker"
              data-toggle="tooltip"
              title
              data-placement="top"
              data-original-title="Select dashboard daterange"
            >
              <span
                className="opacity-60 font-weight-bolder mr-2"
                id="kt_dashboard_daterangepicker_title"
              >
                Today:
              </span>
              <span
                className="font-weight-bolder"
                id="kt_dashboard_daterangepicker_date"
              >
                Mar 1
              </span>
            </a>
            {/*end::Daterange*/}
            {/*begin::Dropdown*/}
            <div
              className="dropdown dropdown-inline"
              data-toggle="tooltip"
              title
              data-placement="top"
              data-original-title="Quick actions"
            >
              <a
                href="#"
                className="btn btn-fixed-height btn-bg-white btn-text-dark-50 btn-hover-text-primary btn-icon-primary font-weight-bolder font-size-sm px-5 my-1 mr-3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="svg-icon svg-icon-md">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                        d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                Add Member
              </a>
              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right p-0 m-0">
                {/*begin::Navigation*/}
                <ul className="navi navi-hover">
                  <li className="navi-header pb-1">
                    <span className="text-primary text-uppercase font-weight-bolder font-size-sm">
                      Add new:
                    </span>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-icon">
                        <i className="flaticon2-shopping-cart-1" />
                      </span>
                      <span className="navi-text">Order</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-icon">
                        <i className="flaticon2-calendar-8" />
                      </span>
                      <span className="navi-text">Event</span>
                      <span className="navi-link-badge">
                        <span className="label label-light-danger label-inline font-weight-bold">
                          new
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-icon">
                        <i className="flaticon2-graph-1" />
                      </span>
                      <span className="navi-text">Report</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-icon">
                        <i className="flaticon2-rocket-1" />
                      </span>
                      <span className="navi-text">Post</span>
                      <span className="navi-link-badge">
                        <span className="label label-light-success label-rounded font-weight-bolder">
                          5
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="#" className="navi-link">
                      <span className="navi-icon">
                        <i className="flaticon2-writing" />
                      </span>
                      <span className="navi-text">File</span>
                    </a>
                  </li>
                </ul>
                {/*end::Navigation*/}
              </div>
            </div>
            {/*end::Dropdown*/}
            {/*begin::Dropdown*/}
            <div
              className="dropdown dropdown-inline"
              data-toggle="tooltip"
              title
              data-placement="top"
              data-original-title="Quick actions"
            >
              <a
                href="#"
                className="btn btn-fixed-height btn-primary font-weight-bolder font-size-sm px-5 my-1"
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
                New Report
              </a>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0">
                {/*begin::Navigation*/}
                <ul className="navi navi-hover">
                  <li className="navi-header font-weight-bold py-4">
                    <span className="font-size-lg">Choose Option:</span>
                    <i
                      className="flaticon2-information icon-md text-muted"
                      data-toggle="tooltip"
                      data-placement="right"
                      title
                      data-original-title="Click to learn more..."
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
          {/*end::Toolbar*/}
        </SubHeaderLayout>
        {/*end::Subheader*/}
        {/*begin::Entry*/}
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Dashboard*/}
            {/*begin::Row*/}
            <div className="row">
              <div className="col-lg-4">
                {/*begin::Stats Widget 1*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Weekly Sales
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover py-5">
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                                          d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Member</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Clipboard-check.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Contact</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Time-schedule.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M10.9630156,7.5 L11.0475062,7.5 C11.3043819,7.5 11.5194647,7.69464724 11.5450248,7.95024814 L12,12.5 L15.2480695,14.3560397 C15.403857,14.4450611 15.5,14.6107328 15.5,14.7901613 L15.5,15 C15.5,15.2109164 15.3290185,15.3818979 15.1181021,15.3818979 C15.0841582,15.3818979 15.0503659,15.3773725 15.0176181,15.3684413 L10.3986612,14.1087258 C10.1672824,14.0456225 10.0132986,13.8271186 10.0316926,13.5879956 L10.4644883,7.96165175 C10.4845267,7.70115317 10.7017474,7.5 10.9630156,7.5 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Event</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-primary label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Git3.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M7,11 L15,11 C16.1045695,11 17,10.1045695 17,9 L17,8 L19,8 L19,9 C19,11.209139 17.209139,13 15,13 L7,13 L7,15 C7,15.5522847 6.55228475,16 6,16 C5.44771525,16 5,15.5522847 5,15 L5,9 C5,8.44771525 5.44771525,8 6,8 C6.55228475,8 7,8.44771525 7,9 L7,11 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M6,21 C7.1045695,21 8,20.1045695 8,19 C8,17.8954305 7.1045695,17 6,17 C4.8954305,17 4,17.8954305 4,19 C4,20.1045695 4.8954305,21 6,21 Z M6,23 C3.790861,23 2,21.209139 2,19 C2,16.790861 3.790861,15 6,15 C8.209139,15 10,16.790861 10,19 C10,21.209139 8.209139,23 6,23 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M18,7 C19.1045695,7 20,6.1045695 20,5 C20,3.8954305 19.1045695,3 18,3 C16.8954305,3 16,3.8954305 16,5 C16,6.1045695 16.8954305,7 18,7 Z M18,9 C15.790861,9 14,7.209139 14,5 C14,2.790861 15.790861,1 18,1 C20.209139,1 22,2.790861 22,5 C22,7.209139 20.209139,9 18,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Task</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Settings4.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Settings</span>
                              </a>
                            </li>
                            <li className="navi-separator my-3" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <circle
                                          fill="#000000"
                                          opacity="0.3"
                                          cx={12}
                                          cy={12}
                                          r={10}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={10}
                                          width={2}
                                          height={7}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={7}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Help</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Privacy</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body d-flex align-items-center justify-content-between pt-7 flex-wrap">
                    {/*begin::label*/}
                    <span className="font-weight-bolder display5 text-dark-75 py-4 pl-5 pr-5">
                      <span className="font-weight-normal font-size-h6 text-muted pr-1">
                        $
                      </span>
                      64M
                    </span>
                    {/*end::label*/}
                    {/*begin::Chart*/}
                    <div className="progress-vertical w-200px h-125px">
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="30%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="80%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "80%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="50%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "50%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="15%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "15%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="30%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress bg-light-primary"
                        data-toggle="tooltip"
                        title
                        data-original-title="70%"
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ height: "70%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    {/*end::Chart*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Stats Widget 1*/}
              </div>
              <div className="col-lg-4">
                {/*begin::Stats Widget 2*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Technologies
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover py-5">
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                                          d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Member</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Clipboard-check.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Contact</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Time-schedule.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M10.9630156,7.5 L11.0475062,7.5 C11.3043819,7.5 11.5194647,7.69464724 11.5450248,7.95024814 L12,12.5 L15.2480695,14.3560397 C15.403857,14.4450611 15.5,14.6107328 15.5,14.7901613 L15.5,15 C15.5,15.2109164 15.3290185,15.3818979 15.1181021,15.3818979 C15.0841582,15.3818979 15.0503659,15.3773725 15.0176181,15.3684413 L10.3986612,14.1087258 C10.1672824,14.0456225 10.0132986,13.8271186 10.0316926,13.5879956 L10.4644883,7.96165175 C10.4845267,7.70115317 10.7017474,7.5 10.9630156,7.5 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Event</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-primary label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Git3.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M7,11 L15,11 C16.1045695,11 17,10.1045695 17,9 L17,8 L19,8 L19,9 C19,11.209139 17.209139,13 15,13 L7,13 L7,15 C7,15.5522847 6.55228475,16 6,16 C5.44771525,16 5,15.5522847 5,15 L5,9 C5,8.44771525 5.44771525,8 6,8 C6.55228475,8 7,8.44771525 7,9 L7,11 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M6,21 C7.1045695,21 8,20.1045695 8,19 C8,17.8954305 7.1045695,17 6,17 C4.8954305,17 4,17.8954305 4,19 C4,20.1045695 4.8954305,21 6,21 Z M6,23 C3.790861,23 2,21.209139 2,19 C2,16.790861 3.790861,15 6,15 C8.209139,15 10,16.790861 10,19 C10,21.209139 8.209139,23 6,23 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M18,7 C19.1045695,7 20,6.1045695 20,5 C20,3.8954305 19.1045695,3 18,3 C16.8954305,3 16,3.8954305 16,5 C16,6.1045695 16.8954305,7 18,7 Z M18,9 C15.790861,9 14,7.209139 14,5 C14,2.790861 15.790861,1 18,1 C20.209139,1 22,2.790861 22,5 C22,7.209139 20.209139,9 18,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Task</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Settings4.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Settings</span>
                              </a>
                            </li>
                            <li className="navi-separator my-3" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <circle
                                          fill="#000000"
                                          opacity="0.3"
                                          cx={12}
                                          cy={12}
                                          r={10}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={10}
                                          width={2}
                                          height={7}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={7}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Help</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Privacy</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body d-flex align-items-center justify-content-between pt-7 flex-wrap">
                    {/*begin::Label*/}
                    <span className="font-weight-bolder display5 text-dark-75 pl-5 pr-10">
                      9.3M
                    </span>
                    {/*end::Label*/}
                    {/*begin::Visuals*/}
                    <div className="d-flex align-items-center justify-content-between">
                      {/*begin::legends*/}
                      <div className="d-flex flex-column mr-4">
                        {/*begin::legend*/}
                        <div className="legend d-flex align-items-center py-1">
                          <span className="label label-dark-50 label-dot mr-2" />
                          <span className="font-weight-bolder font-size-lg text-muted">
                            HTML
                          </span>
                        </div>
                        {/*end::legend*/}
                        {/*begin::legend*/}
                        <div className="legend d-flex align-items-center py-1">
                          <span className="label label-dark-75 label-dot mr-2" />
                          <span className="font-weight-bolder font-size-lg text-muted">
                            CSS
                          </span>
                        </div>
                        {/*end::legend*/}
                        {/*begin::legend*/}
                        <div className="legend d-flex align-items-center py-1">
                          <span className="label label-dot label-primary mr-2" />
                          <span className="font-weight-bolder font-size-lg text-muted">
                            Angular
                          </span>
                        </div>
                        {/*end::legend*/}
                      </div>
                      {/*end::legends*/}
                      {/*begin::Chart*/}
                      <div className="d-flex flex-center position-relative">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className />
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className />
                          </div>
                        </div>
                        <div className="font-weight-bolder font-size-h5 text-muted position-absolute">
                          8,345
                        </div>
                        <canvas
                          id="kt_stats_widget_2_chart"
                          style={{
                            height: "110px",
                            width: "110px",
                            display: "block",
                          }}
                          width={110}
                          height={110}
                          className="chartjs-render-monitor"
                        />
                      </div>
                      {/*end::Chart*/}
                    </div>
                    {/*end::Visuals*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Stats Widget 2*/}
              </div>
              <div className="col-lg-4">
                {/*begin::Stats Widget 3*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Total Orders
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover py-5">
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                                          d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Member</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Clipboard-check.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Contact</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Time-schedule.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M10.9630156,7.5 L11.0475062,7.5 C11.3043819,7.5 11.5194647,7.69464724 11.5450248,7.95024814 L12,12.5 L15.2480695,14.3560397 C15.403857,14.4450611 15.5,14.6107328 15.5,14.7901613 L15.5,15 C15.5,15.2109164 15.3290185,15.3818979 15.1181021,15.3818979 C15.0841582,15.3818979 15.0503659,15.3773725 15.0176181,15.3684413 L10.3986612,14.1087258 C10.1672824,14.0456225 10.0132986,13.8271186 10.0316926,13.5879956 L10.4644883,7.96165175 C10.4845267,7.70115317 10.7017474,7.5 10.9630156,7.5 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Event</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-primary label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Git3.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M7,11 L15,11 C16.1045695,11 17,10.1045695 17,9 L17,8 L19,8 L19,9 C19,11.209139 17.209139,13 15,13 L7,13 L7,15 C7,15.5522847 6.55228475,16 6,16 C5.44771525,16 5,15.5522847 5,15 L5,9 C5,8.44771525 5.44771525,8 6,8 C6.55228475,8 7,8.44771525 7,9 L7,11 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M6,21 C7.1045695,21 8,20.1045695 8,19 C8,17.8954305 7.1045695,17 6,17 C4.8954305,17 4,17.8954305 4,19 C4,20.1045695 4.8954305,21 6,21 Z M6,23 C3.790861,23 2,21.209139 2,19 C2,16.790861 3.790861,15 6,15 C8.209139,15 10,16.790861 10,19 C10,21.209139 8.209139,23 6,23 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M18,7 C19.1045695,7 20,6.1045695 20,5 C20,3.8954305 19.1045695,3 18,3 C16.8954305,3 16,3.8954305 16,5 C16,6.1045695 16.8954305,7 18,7 Z M18,9 C15.790861,9 14,7.209139 14,5 C14,2.790861 15.790861,1 18,1 C20.209139,1 22,2.790861 22,5 C22,7.209139 20.209139,9 18,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Task</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Settings4.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Settings</span>
                              </a>
                            </li>
                            <li className="navi-separator my-3" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <circle
                                          fill="#000000"
                                          opacity="0.3"
                                          cx={12}
                                          cy={12}
                                          r={10}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={10}
                                          width={2}
                                          height={7}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={7}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Help</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Privacy</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div
                    className="card-body d-flex align-items-center justify-content-between pt-7 flex-wrap"
                    style={{ position: "relative" }}
                  >
                    {/*begin::label*/}
                    <span className="font-weight-bolder display5 text-dark-75 pl-5 pr-10">
                      17M
                    </span>
                    {/*end::label*/}
                    {/*begin::Chart*/}
                    <div
                      id="kt_stats_widget_3_chart"
                      className="w-200px"
                      style={{ minHeight: "100px" }}
                    >
                      <div
                        id="apexchartsp21r8ju7"
                        className="apexcharts-canvas apexchartsp21r8ju7 apexcharts-theme-light"
                        style={{ width: "200px", height: "100px" }}
                      >
                        <svg
                          id="SvgjsSvg1006"
                          width={200}
                          height={100}
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}
                        >
                          <g
                            id="SvgjsG1008"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 0)"
                          >
                            <defs id="SvgjsDefs1007">
                              <clipPath id="gridRectMaskp21r8ju7">
                                <rect
                                  id="SvgjsRect1011"
                                  width={207}
                                  height={103}
                                  x="-3.5"
                                  y="-1.5"
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="gridRectMarkerMaskp21r8ju7">
                                <rect
                                  id="SvgjsRect1012"
                                  width={204}
                                  height={104}
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <g
                              id="SvgjsG1019"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG1020"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              />
                            </g>
                            <g id="SvgjsG1025" className="apexcharts-grid">
                              <g
                                id="SvgjsG1026"
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}
                              >
                                <line
                                  id="SvgjsLine1028"
                                  x1={0}
                                  y1={0}
                                  x2={200}
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1029"
                                  x1={0}
                                  y1={20}
                                  x2={200}
                                  y2={20}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1030"
                                  x1={0}
                                  y1={40}
                                  x2={200}
                                  y2={40}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1031"
                                  x1={0}
                                  y1={60}
                                  x2={200}
                                  y2={60}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1032"
                                  x1={0}
                                  y1={80}
                                  x2={200}
                                  y2={80}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1033"
                                  x1={0}
                                  y1={100}
                                  x2={200}
                                  y2={100}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1027"
                                className="apexcharts-gridlines-vertical"
                                style={{ display: "none" }}
                              />
                              <line
                                id="SvgjsLine1035"
                                x1={0}
                                y1={100}
                                x2={200}
                                y2={100}
                                stroke="transparent"
                                strokeDasharray={0}
                              />
                              <line
                                id="SvgjsLine1034"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2={100}
                                stroke="transparent"
                                strokeDasharray={0}
                              />
                            </g>
                            <g
                              id="SvgjsG1013"
                              className="apexcharts-area-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG1014"
                                className="apexcharts-series"
                                seriesname="NetxProfit"
                                rel={1}
                              >
                                <path
                                  id="SvgjsPath1017"
                                  d="M0 100L0 80C35 80 65 20 100 20C135 20 165 55 200 55C200 55 200 55 200 100M200 55C200 55 200 55 200 55 "
                                  fill="rgba(222,237,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskp21r8ju7)"
                                  pathto="M 0 100L 0 80C 35 80 65 20 100 20C 135 20 165 55 200 55C 200 55 200 55 200 100M 200 55z"
                                  pathfrom="M -1 380L -1 380L 100 380L 200 380"
                                />
                                <path
                                  id="SvgjsPath1018"
                                  d="M0 80C35 80 65 20 100 20C135 20 165 55 200 55C200 55 200 55 200 55 "
                                  fill="none"
                                  fillOpacity={1}
                                  stroke="#3e97ff"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={3}
                                  strokeDasharray={0}
                                  className="apexcharts-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskp21r8ju7)"
                                  pathto="M 0 80C 35 80 65 20 100 20C 135 20 165 55 200 55"
                                  pathfrom="M -1 380L -1 380L 100 380L 200 380"
                                />
                                <g
                                  id="SvgjsG1015"
                                  className="apexcharts-series-markers-wrap"
                                >
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle1041"
                                      r={0}
                                      cx={0}
                                      cy={0}
                                      className="apexcharts-marker wcsisqy0mg no-pointer-events"
                                      stroke="#3e97ff"
                                      fill="#deedff"
                                      fillOpacity={1}
                                      strokeWidth={3}
                                      strokeOpacity="0.9"
                                      default-marker-size={0}
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG1016"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <line
                              id="SvgjsLine1036"
                              x1={0}
                              y1={0}
                              x2={200}
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1037"
                              x1={0}
                              y1={0}
                              x2={200}
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1038"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1039"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1040"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                          <g
                            id="SvgjsG1024"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(-18, 0)"
                          />
                          <g
                            id="SvgjsG1009"
                            className="apexcharts-annotations"
                          />
                        </svg>
                        <div
                          className="apexcharts-legend"
                          style={{ maxHeight: "50px" }}
                        />
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "Poppins", fontSize: "12px" }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(222, 237, 255)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "12px",
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-label" />
                                <span className="apexcharts-tooltip-text-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                          <div
                            className="apexcharts-xaxistooltip-text"
                            style={{ fontFamily: "Poppins", fontSize: "12px" }}
                          />
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                    {/*end::Chart*/}
                    <div className="resize-triggers">
                      <div className="expand-trigger">
                        <div style={{ width: "414px", height: "175px" }} />
                      </div>
                      <div className="contract-trigger" />
                    </div>
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Stats Widget 3*/}
              </div>
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row">
              <div className="col-lg-4">
                {/*begin::Mixed Widget 2*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Top Products
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-lg">
                        240,000 Total Sales
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover py-5">
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                                          d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Member</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Clipboard-check.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Contact</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Time-schedule.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M10.9630156,7.5 L11.0475062,7.5 C11.3043819,7.5 11.5194647,7.69464724 11.5450248,7.95024814 L12,12.5 L15.2480695,14.3560397 C15.403857,14.4450611 15.5,14.6107328 15.5,14.7901613 L15.5,15 C15.5,15.2109164 15.3290185,15.3818979 15.1181021,15.3818979 C15.0841582,15.3818979 15.0503659,15.3773725 15.0176181,15.3684413 L10.3986612,14.1087258 C10.1672824,14.0456225 10.0132986,13.8271186 10.0316926,13.5879956 L10.4644883,7.96165175 C10.4845267,7.70115317 10.7017474,7.5 10.9630156,7.5 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Event</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-primary label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Git3.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M7,11 L15,11 C16.1045695,11 17,10.1045695 17,9 L17,8 L19,8 L19,9 C19,11.209139 17.209139,13 15,13 L7,13 L7,15 C7,15.5522847 6.55228475,16 6,16 C5.44771525,16 5,15.5522847 5,15 L5,9 C5,8.44771525 5.44771525,8 6,8 C6.55228475,8 7,8.44771525 7,9 L7,11 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M6,21 C7.1045695,21 8,20.1045695 8,19 C8,17.8954305 7.1045695,17 6,17 C4.8954305,17 4,17.8954305 4,19 C4,20.1045695 4.8954305,21 6,21 Z M6,23 C3.790861,23 2,21.209139 2,19 C2,16.790861 3.790861,15 6,15 C8.209139,15 10,16.790861 10,19 C10,21.209139 8.209139,23 6,23 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M18,7 C19.1045695,7 20,6.1045695 20,5 C20,3.8954305 19.1045695,3 18,3 C16.8954305,3 16,3.8954305 16,5 C16,6.1045695 16.8954305,7 18,7 Z M18,9 C15.790861,9 14,7.209139 14,5 C14,2.790861 15.790861,1 18,1 C20.209139,1 22,2.790861 22,5 C22,7.209139 20.209139,9 18,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                        <path
                                          d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Task</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Settings4.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Settings</span>
                              </a>
                            </li>
                            <li className="navi-separator my-3" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <circle
                                          fill="#000000"
                                          opacity="0.3"
                                          cx={12}
                                          cy={12}
                                          r={10}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={10}
                                          width={2}
                                          height={7}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={11}
                                          y={7}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Help</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Privacy</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-6">
                    {/*begin::Nav*/}
                    <ul className="nav nav-pills nav-fill flex-nowrap">
                      {/*begin::Nav Item*/}
                      <li className="nav-item w-90px">
                        <a
                          className="nav-link active d-flex flex-column shadow-sm h-80px"
                          data-toggle="tab"
                          href="#kt_tab_mixed_2_1"
                        >
                          <span className="nav-icon">
                            <span className="svg-icon">
                              <span className="svg-icon svg-icon-xxl">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
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
                                    <rect
                                      fill="#000000"
                                      opacity="0.3"
                                      x={13}
                                      y={4}
                                      width={3}
                                      height={16}
                                      rx="1.5"
                                    />
                                    <rect
                                      fill="#000000"
                                      x={8}
                                      y={9}
                                      width={3}
                                      height={11}
                                      rx="1.5"
                                    />
                                    <rect
                                      fill="#000000"
                                      x={18}
                                      y={11}
                                      width={3}
                                      height={9}
                                      rx="1.5"
                                    />
                                    <rect
                                      fill="#000000"
                                      x={3}
                                      y={13}
                                      width={3}
                                      height={7}
                                      rx="1.5"
                                    />
                                  </g>
                                </svg>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                          </span>
                          <span className="nav-text pt-3 font-weight-bold">
                            Settings
                          </span>
                        </a>
                      </li>
                      {/*begin::Nav Item*/}
                      {/*end::Nav Item*/}
                      <li className="nav-item w-90px mx-5">
                        <a
                          className="nav-link d-flex flex-column shadow-sm h-80px"
                          data-toggle="tab"
                          href="#kt_tab_mixed_2_2"
                        >
                          <span className="nav-icon">
                            <span className="svg-icon">
                              <span className="svg-icon svg-icon-xxl">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
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
                                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                      fill="#000000"
                                    />
                                    <rect
                                      fill="#000000"
                                      opacity="0.3"
                                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                      x="16.3255682"
                                      y="2.94551858"
                                      width={3}
                                      height={18}
                                      rx={1}
                                    />
                                  </g>
                                </svg>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                          </span>
                          <span className="nav-text pt-3 font-weight-bold">
                            Code
                          </span>
                        </a>
                      </li>
                      {/*begin::Nav Item*/}
                      {/*end::Nav Item*/}
                      <li className="nav-item w-90px">
                        <a
                          className="nav-link d-flex flex-column shadow-sm h-80px"
                          data-toggle="tab"
                          href="#kt_tab_mixed_2_3"
                        >
                          <span className="nav-icon">
                            <span className="svg-icon">
                              <span className="svg-icon svg-icon-xxl">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
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
                                    <rect
                                      fill="#000000"
                                      x={4}
                                      y={4}
                                      width={7}
                                      height={7}
                                      rx="1.5"
                                    />
                                    <path
                                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                      fill="#000000"
                                      opacity="0.3"
                                    />
                                  </g>
                                </svg>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                          </span>
                          <span className="nav-text pt-3 font-weight-bold">
                            Design
                          </span>
                        </a>
                      </li>
                      {/*end::Nav Item*/}
                    </ul>
                    {/*end::Nav*/}
                    {/*begin::Tab Content*/}
                    <div className="tab-content mt-9" id="myTabMixed2">
                      {/*begin::Tab Pane*/}
                      <div
                        className="tab-pane fade active show"
                        id="kt_tab_mixed_2_1"
                        role="tabpanel"
                        aria-labelledby="kt_tab_mixed_2_1"
                      >
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Top Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Successful Fellas
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              65%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Popular Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Most Successful
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              83%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "83%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              New Users
                            </a>
                            <span className="text-muted font-weight-bold">
                              Awesome Users
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              47%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Active Customers
                            </a>
                            <span className="text-muted font-weight-bold">
                              Best Customers
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              71%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "71%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Tab Pane*/}
                      {/*begin::Tab Pane*/}
                      <div
                        className="tab-pane fade"
                        id="kt_tab_mixed_2_2"
                        role="tabpanel"
                        aria-labelledby="kt_tab_mixed_2_2"
                      >
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Popular Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Most Successful
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              83%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "83%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              New Users
                            </a>
                            <span className="text-muted font-weight-bold">
                              Awesome Users
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              47%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Top Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Successful Fellas
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              65%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Active Customers
                            </a>
                            <span className="text-muted font-weight-bold">
                              Best Customers
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              71%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "71%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Tab Pane*/}
                      {/*begin::Tab Pane*/}
                      <div
                        className="tab-pane fade"
                        id="kt_tab_mixed_2_3"
                        role="tabpanel"
                        aria-labelledby="kt_tab_mixed_2_3"
                      >
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              New Users
                            </a>
                            <span className="text-muted font-weight-bold">
                              Awesome Users
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              47%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Active Customers
                            </a>
                            <span className="text-muted font-weight-bold">
                              Best Customers
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              71%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "71%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between mb-6">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Top Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Successful Fellas
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              65%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between">
                          {/*begin::Text*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg"
                            >
                              Popular Authors
                            </a>
                            <span className="text-muted font-weight-bold">
                              Most Successful
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Progress*/}
                          <div className="d-flex align-items-center">
                            <span className="text-muted mr-3 font-size-sm font-weight-bolder">
                              83%
                            </span>
                            <div className="progress progress-xs min-w-65px h-5px">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "83%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*end::Progress*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Tab Pane*/}
                    </div>
                    {/*end::Tab Content*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Mixed Widget 2*/}
              </div>
              <div className="col-lg-8">
                {/*begin::Tables Widget 1*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-7">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Active Companies
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-lg">
                        49 Acual Tasks
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <ul className="nav nav-pills nav-pills-sm nav-dark">
                        <li className="nav-item ml-0">
                          <a
                            className="nav-link py-2 px-4 font-weight-bolder font-size-sm"
                            data-toggle="tab"
                            href="#kt_tab_table_1_1"
                          >
                            Pending
                          </a>
                        </li>
                        <li className="nav-item ml-0">
                          <a
                            className="nav-link py-2 px-4 font-weight-bolder font-size-sm"
                            data-toggle="tab"
                            href="#kt_tab_table_1_2"
                          >
                            Inactive
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link py-2 px-4 active font-weight-bolder font-size-sm"
                            data-toggle="tab"
                            href="#kt_tab_table_1_3"
                          >
                            Active
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-1 pb-4">
                    <div className="tab-content mt-5" id="myTabTable1">
                      {/*begin::Tap pane*/}
                      <div
                        className="tab-pane fade"
                        id="kt_tab_table_1_1"
                        role="tabpanel"
                        aria-labelledby="kt_tab_table_1_1"
                      >
                        {/*begin::Table*/}
                        <div className="table-responsive">
                          <table className="table table-borderless table-vertical-center">
                            <thead>
                              <tr>
                                <th className="p-0 w-50px" />
                                <th className="p-0 min-w-150px" />
                                <th className="p-0 min-w-140px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-50px" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/003-puzzle.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Python Inc.
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $120,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    AngularJS, C#
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-success label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/005-bebo.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Beats Audio
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $28,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    VueJS, Ruby
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-primary label-inline">
                                    Success
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="pt-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/014-kickstarter.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Sass Technologies
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $970,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-danger label-inline">
                                    Rejected
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/006-plurk.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0 text-left">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    BP Industries
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $3,400,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-info label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="pl-0 py-5">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/015-telegram.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Automatica
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $700,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    Laravel Keen
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-warning label-inline">
                                    In Progress
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*end::Tablet*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div
                        className="tab-pane fade"
                        id="kt_tab_table_1_2"
                        role="tabpanel"
                        aria-labelledby="kt_tab_table_1_2"
                      >
                        {/*begin::Table*/}
                        <div className="table-responsive">
                          <table className="table table-borderless table-vertical-center">
                            <thead>
                              <tr>
                                <th className="p-0 w-50px" />
                                <th className="p-0 min-w-150px" />
                                <th className="p-0 min-w-140px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-50px" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="pl-0 py-5">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/015-telegram.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Automatica
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $700,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    Laravel Keen
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-warning label-inline">
                                    In Progress
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/003-puzzle.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Python Inc.
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $120,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    AngularJS, C#
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-success label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/005-bebo.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Beats Audio
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $28,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    VueJS, Ruby
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-primary label-inline">
                                    Success
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/006-plurk.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0 text-left">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    BP Industries
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $3,400,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-info label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="pt-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/014-kickstarter.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Sass Technologies
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $970,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-danger label-inline">
                                    Rejected
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*end::Tablet*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div
                        className="tab-pane fade show active"
                        id="kt_tab_table_1_3"
                        role="tabpanel"
                        aria-labelledby="kt_tab_table_1_3"
                      >
                        {/*begin::Table*/}
                        <div className="table-responsive">
                          <table className="table table-borderless table-vertical-center">
                            <thead>
                              <tr>
                                <th className="p-0 w-50px" />
                                <th className="p-0 min-w-150px" />
                                <th className="p-0 min-w-140px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-110px" />
                                <th className="p-0 min-w-50px" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/006-plurk.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0 text-left">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    BP Industries
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $3,400,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-info label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="pl-0 py-5">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/015-telegram.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Automatica
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $700,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    Laravel Keen
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-warning label-inline">
                                    In Progress
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/003-puzzle.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Python Inc.
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $120,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    AngularJS, C#
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-success label-inline">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/005-bebo.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Beats Audio
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $28,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    VueJS, Ruby
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-primary label-inline">
                                    Success
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="pt-5 pl-0">
                                  <div className="symbol symbol-45 symbol-light mr-2">
                                    <span className="symbol-label">
                                      <img
                                        src="assets/media/svg/misc/014-kickstarter.svg"
                                        className="h-50 align-self-center"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                </td>
                                <td className="pl-0">
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    Sass Technologies
                                  </a>
                                  <span className="text-muted font-weight-bold d-block">
                                    Successful Fellas
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-bold d-block">
                                    Paid
                                  </span>
                                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    $970,000
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="text-muted font-weight-500">
                                    ReactJs, HTML
                                  </span>
                                </td>
                                <td className="text-right">
                                  <span className="label label-lg label-light-danger label-inline">
                                    Rejected
                                  </span>
                                </td>
                                <td className="text-right pr-0">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-light btn-sm"
                                  >
                                    <span className="svg-icon svg-icon-md svg-icon-success">
                                      {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
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
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*end::Tablet*/}
                      </div>
                      {/*end::Tap pane*/}
                    </div>
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Tables Widget 1*/}
              </div>
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row">
              <div className="col-lg-4">
                {/*begin::Stats Widget 10*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Body*/}
                  <div className="card-body">
                    <div
                      id="stats-widget-slider-1"
                      className="carousel slide"
                      data-ride="carousel"
                      data-interval={8000}
                    >
                      {/*begin::Top*/}
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        {/*begin::Label*/}
                        <span className="font-size-h6 text-muted font-weight-bolder text-uppercase pr-2">
                          Announcements
                        </span>
                        {/*end::Label*/}
                        {/*begin::Action*/}
                        <div className="p-0">
                          <a
                            href="#stats-widget-slider-1"
                            className="btn btn-icon btn-light btn-sm mr-1"
                            role="button"
                            data-slide="prev"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-left.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#stats-widget-slider-1"
                            className="btn btn-icon btn-light btn-sm"
                            role="button"
                            data-slide="next"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </div>
                        {/*end::Action*/}
                      </div>
                      {/*end::Top*/}
                      {/*begin::Carousel*/}
                      <div className="carousel-inner pt-9">
                        {/*begin::Item*/}
                        <div className="carousel-item">
                          {/*begin::Section*/}
                          <div className="d-flex flex-column justify-content-between h-100">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              AirGreat Presentation
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-dark-75 font-size-lg font-weight-normal pt-2 mb-0">
                              To start a blog, think of a topic about and first
                              brainstorm ways to write details
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="carousel-item active">
                          {/*begin::Section*/}
                          <div className="d-flex flex-column justify-content-between h-100">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              Keen Admin Launch Day
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-dark-75 font-size-lg font-weight-normal pt-2 mb-0">
                              To start a blog, think of a topic about and first
                              brainstorm ways to write details
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Carousel*/}
                    </div>
                  </div>
                  {/*end::Body*/}
                  {/*begin::Footer*/}
                  <div className="card-footer border-0 d-flex align-items-center justify-content-between pt-0">
                    {/*begin::Label*/}
                    <span className="label label-lg label-light-primary label-inline font-size-sm font-weight-bolder py-5">
                      03 SEP, 20
                    </span>
                    {/*end::Label*/}
                    <a
                      href="#"
                      className="btn btn-sm btn-primary font-weight-bolder px-6"
                    >
                      Join
                    </a>
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Stats Widget 10*/}
              </div>
              <div className="col-lg-4">
                {/*begin::Stats Widget 11*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Body*/}
                  <div className="card-body">
                    <div
                      id="stats-widget-slider-2"
                      className="carousel slide"
                      data-ride="carousel"
                      data-interval={8000}
                    >
                      {/*begin::Top*/}
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        {/*begin::Label*/}
                        <span className="font-size-h6 text-muted font-weight-bolder text-uppercase pr-2">
                          Projects
                        </span>
                        {/*end::Label*/}
                        {/*begin::Action*/}
                        <div className="p-0">
                          <a
                            href="#stats-widget-slider-2"
                            className="btn btn-icon btn-light btn-sm mr-1"
                            role="button"
                            data-slide="prev"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-left.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#stats-widget-slider-2"
                            className="btn btn-icon btn-light btn-sm"
                            role="button"
                            data-slide="next"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </div>
                        {/*end::Action*/}
                      </div>
                      {/*end::Top*/}
                      {/*begin::Carousel*/}
                      <div className="carousel-inner pt-9">
                        {/*begin::Item*/}
                        <div className="carousel-item">
                          {/*begin::Section*/}
                          <div className="d-flex flex-column justify-content-between h-100">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              AirGreat Presentation
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-dark-75 font-size-lg font-weight-normal pt-2 mb-0">
                              To start a blog, think of a topic about and first
                              brainstorm ways to write details
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="carousel-item active">
                          {/*begin::Section*/}
                          <div className="d-flex flex-column justify-content-between h-100">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              Keen Admin Launch Day
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-dark-75 font-size-lg font-weight-normal pt-2 mb-0">
                              To start a blog, think of a topic about and first
                              brainstorm ways to write details
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Carousel*/}
                    </div>
                  </div>
                  {/*end::Body*/}
                  {/*begin::Footer*/}
                  <div className="card-footer border-0 pt-0">
                    {/*begin::Status*/}
                    <div className="flex-grow-1">
                      {/*begin::Text*/}
                      <div className="text-muted font-weight-bold font-size-lg pb-4">
                        Progress
                      </div>
                      {/*begendin::Text*/}
                      {/*begin::Progress*/}
                      <div className="progress progress-xs bg-light-primary">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={24}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      {/*end::Progress*/}
                    </div>
                    {/*end::Status*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Stats Widget 11*/}
              </div>
              <div className="col-lg-4">
                {/*begin::Stats Widget 12*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Body*/}
                  <div className="card-body">
                    <div
                      id="stats-widget-slider-3"
                      className="carousel slide"
                      data-ride="carousel"
                      data-interval={8000}
                    >
                      {/*begin::Top*/}
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        {/*begin::Label*/}
                        <span className="font-size-h6 text-muted font-weight-bolder text-uppercase pr-2">
                          Today’s Schedule
                        </span>
                        {/*end::Label*/}
                        {/*begin::Action*/}
                        <div className="p-0">
                          <a
                            href="#stats-widget-slider-3"
                            className="btn btn-icon btn-light btn-sm mr-1"
                            role="button"
                            data-slide="prev"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-left.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#stats-widget-slider-3"
                            className="btn btn-icon btn-light btn-sm"
                            role="button"
                            data-slide="next"
                          >
                            <span className="svg-icon svg-icon-md">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </div>
                        {/*end::Action*/}
                      </div>
                      {/*end::Top*/}
                      {/*begin::Carousel*/}
                      <div className="carousel-inner pt-9">
                        {/*begin::Item*/}
                        <div className="carousel-item">
                          {/*begin::Section*/}
                          <div className="flex-grow-1">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              UI/UX Design Updates
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-primary font-size-h2 font-weight-bolder pt-3 mb-0">
                              11:15AM - 12:30PM
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="carousel-item active">
                          {/*begin::Section*/}
                          <div className="flex-grow-1">
                            {/*begin::Title*/}
                            <h3 className="font-size-h4 text-dark-75 text-hover-primary font-weight-bold cursor-pointer">
                              UI/UX Design Updates
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <p className="text-primary font-size-h2 font-weight-bolder pt-3 mb-0">
                              11:15AM - 12:30PM
                            </p>
                            {/*end::Text*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Carousel*/}
                    </div>
                  </div>
                  {/*end::Body*/}
                  {/*begin::Footer*/}
                  <div className="card-footer border-0 d-flex align-items-center justify-content-between pt-0">
                    {/*begin::Label*/}
                    <span className="text-muted font-size-lg font-weight-bold pr-2">
                      256 R St. Manhattan NY..
                    </span>
                    {/*end::Label*/}
                    <a
                      href="#"
                      className="btn btn-sm btn-primary font-weight-bolder px-6"
                    >
                      Join
                    </a>
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Stats Widget 12*/}
              </div>
            </div>
            {/*end::Row*/}
            {/*begin::Table Widget 6*/}
            <div className="card card-custom gutter-b">
              {/*begin::Header*/}
              <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label font-weight-bold font-size-h4 text-dark-75">
                    Memebrs Progresss
                  </span>
                  <span className="text-muted mt-3 font-weight-bold font-size-sm">
                    More than 400+ new members
                  </span>
                </h3>
                <div className="card-toolbar">
                  <a
                    href="#"
                    className="btn btn-primary font-weight-bolder font-size-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-white">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
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
                            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                    New Member
                  </a>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body py-0">
                {/*begin::Table*/}
                <div className="table-responsive">
                  <table
                    className="table table-borderless table-head-custom table-vertical-center"
                    id="kt_advance_table_widget_1"
                  >
                    <thead>
                      <tr className="text-left">
                        <th className="p-0 w-50px" />
                        <th className="p-0 min-w-200px" />
                        <th className="p-0 min-w-100px" />
                        <th className="p-0 min-w-180px" />
                        <th className="p-0 min-w-200px" />
                        <th className="p-0 min-w-100px" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pr-0 py-4">
                          <div className="symbol symbol-45 flex-shrink-0 mr-5 mt-1">
                            <img alt="Pic" src="assets/media/users/150-5.jpg" />
                          </div>
                        </td>
                        <td className="pl-0">
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Marcus Smart
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Successful Fellas
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $32,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td className="text-right pr-lg-25 pr-15">
                          <span className="text-muted font-weight-500">
                            ReactJs, HTML
                          </span>
                        </td>
                        <td className>
                          <div className="d-flex flex-column w-100 mr-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-muted mr-2 font-size-sm font-weight-bolder">
                                79%
                              </span>
                              <span className="text-muted font-size-sm font-weight-bold">
                                Progress
                              </span>
                            </div>
                            <div className="progress progress-xs w-100">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "79%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                  />
                                  <path
                                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
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
                                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <path
                                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-0 py-4">
                          <div className="symbol symbol-45 symbol-light-info flex-shrink-0 mr-5">
                            <span className="symbol-label font-weight-bolder font-size-lg">
                              AH
                            </span>
                          </div>
                        </td>
                        <td className="pl-0">
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Andreas Hawks
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Successful Fellas
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $4,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td className="text-right pr-lg-25 pr-15">
                          <span className="text-muted font-weight-500">
                            Python, MySQL
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-column w-100 mr-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-muted mr-2 font-size-sm font-weight-bolder">
                                65%
                              </span>
                              <span className="text-muted font-size-sm font-weight-bold">
                                Progress
                              </span>
                            </div>
                            <div className="progress progress-xs w-100">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                  />
                                  <path
                                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
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
                                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <path
                                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-0 py-5">
                          <div className="symbol symbol-45 symbol-light-success flex-shrink-0 mr-5">
                            <span className="symbol-label font-weight-bolder font-size-lg">
                              SC
                            </span>
                          </div>
                        </td>
                        <td className="pl-0">
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Sarah Connor
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Successful Fellas
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $170,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td className="text-right pr-lg-25 pr-15">
                          <span className="text-muted font-weight-500">
                            Python, MySQL
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-column w-100 mr-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-muted mr-2 font-size-sm font-weight-bolder">
                                84%
                              </span>
                              <span className="text-muted font-size-sm font-weight-bold">
                                Progress
                              </span>
                            </div>
                            <div className="progress progress-xs w-100">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "84%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                  />
                                  <path
                                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
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
                                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <path
                                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-0 py-4">
                          <div className="symbol symbol-45 flex-shrink-0 mr-3">
                            <img alt="Pic" src="assets/media/users/150-7.jpg" />
                          </div>
                        </td>
                        <td className="pl-0">
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Amanda Hardenr
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Successful Fellas
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $2,800
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td className="text-right pr-lg-25 pr-15">
                          <span className="text-muted font-weight-500">
                            AngularJS, C#
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-column w-100 mr-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-muted mr-2 font-size-sm font-weight-bolder">
                                47%
                              </span>
                              <span className="text-muted font-size-sm font-weight-bold">
                                Progress
                              </span>
                            </div>
                            <div className="progress progress-xs w-100">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                  />
                                  <path
                                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
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
                                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <path
                                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-0 py-4">
                          <div className="symbol symbol-45 symbol-light-danger flex-shrink-0 mr-3">
                            <span className="symbol-label font-weight-bolder font-size-lg">
                              JT
                            </span>
                          </div>
                        </td>
                        <td className="pl-0">
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Jason Tatumr
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Successful Fellas
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $590,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td className="text-right pr-lg-25 pr-15">
                          <span className="text-muted font-weight-500">
                            ReactJS, Ruby
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-column w-100 mr-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-muted mr-2 font-size-sm font-weight-bolder">
                                72%
                              </span>
                              <span className="text-muted font-size-sm font-weight-bold">
                                Progress
                              </span>
                            </div>
                            <div className="progress progress-xs w-100">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "72%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
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
                                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                  />
                                  <path
                                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
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
                                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <path
                                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*end::Table*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Table Widget 6*/}
            {/*begin::Row*/}
            <div className="row">
              <div className="col-lg-4">
                {/*begin::List Widget 1*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Authors Progress
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-lg">
                        Avarage +47%
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                          {/*begin::Naviigation*/}
                          <ul className="navi navi-hover navi-active navi-accent">
                            <li className="navi-header font-weight-bold py-5">
                              <span className="font-size-lg">
                                Quick Actions:
                              </span>
                              <i
                                className="flaticon2-information icon-md text-muted"
                                data-toggle="tooltip"
                                data-placement="right"
                                title
                                data-original-title="Click to learn more..."
                              />
                            </li>
                            <li className="navi-separator mb-3 opacity-70" />
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-danger">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                          fill="#000000"
                                        />
                                        <path
                                          d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">New Post</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
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
                                          d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Add Member</span>
                                <span className="navi-label">
                                  <span className="label label-light-danger label-rounded font-weight-bold">
                                    3
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-success">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">
                                  Check Projects
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-warning">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Clipboard-list.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                          fill="#000000"
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={10}
                                          y={9}
                                          width={7}
                                          height={2}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={7}
                                          y={9}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={7}
                                          y={13}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={10}
                                          y={13}
                                          width={7}
                                          height={2}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={7}
                                          y={17}
                                          width={2}
                                          height={2}
                                          rx={1}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={10}
                                          y={17}
                                          width={7}
                                          height={2}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">
                                  Generate Report
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <span className="svg-icon svg-icon-md svg-icon-info">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-2.svg*/}
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
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </span>
                                <span className="navi-text">Settings</span>
                                <span className="navi-label">
                                  <span className="label label-light-success label-rounded font-weight-bold">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-separator mt-3 opacity-70" />
                            <li className="navi-footer pt-5 pb-4">
                              <a
                                className="btn btn-light-primary font-weight-bolder btn-sm px-5"
                                href="#"
                              >
                                More options
                              </a>
                              <a
                                className="btn btn-clean font-weight-bold btn-sm d-none"
                                href="#"
                                data-toggle="tooltip"
                                data-placement="right"
                                title
                                data-original-title="Click to learn more..."
                              >
                                Learn more
                              </a>
                            </li>
                          </ul>
                          {/*end::Naviigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-5">
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 flex-shrink-0 mr-3">
                        <img alt="Pic" src="assets/media/users/150-1.jpg" />
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Ana Larson
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-success font-weight-bolder font-size-sm pr-6">
                            +65%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-info flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          AH
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Andreas Hawks
                          </a>
                          <span className="text-muted font-weight-bold">
                            Python Developer
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-success font-weight-bolder font-size-sm pr-6">
                            +23%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-success flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          SC
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Sarah Connor
                          </a>
                          <span className="text-muted font-weight-bold">
                            HTML, CSS. jQuery
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-danger font-weight-bolder font-size-sm pr-6">
                            -34%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 flex-shrink-0 mr-3">
                        <img alt="Pic" src="assets/media/users/150-12.jpg" />
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Jhonny Harden
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-success font-weight-bolder font-size-sm pr-6">
                            +72%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-danger flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          SR
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Sean Robbins
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-success font-weight-bolder font-size-sm pr-6">
                            +65%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-primary flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          JT
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Jason Tatum
                          </a>
                          <span className="text-muted font-weight-bold">
                            ASP.NET Developer
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Section*/}
                        <div className="d-flex align-items-center py-2">
                          {/*begin::Label*/}
                          <span className="text-success font-weight-bolder font-size-sm pr-6">
                            +139%
                          </span>
                          {/*end::Label*/}
                          {/*begin::Btn*/}
                          <a href="#" className="btn btn-icon btn-light btn-sm">
                            <span className="svg-icon svg-icon-md svg-icon-success">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-right.svg*/}
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
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::List Widget 1*/}
              </div>
              <div className="col-lg-4">
                {/*begin::List Widget 2*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-6">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Authors Earninigs
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-lg">
                        Avarage +47%
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        title
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <a
                          href="#"
                          className="btn btn-icon-primary btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g stroke="none" strokeWidth={1}>
                                <rect
                                  x={14}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                />
                                <rect
                                  x={3}
                                  y={9}
                                  width={6}
                                  height={6}
                                  rx={3}
                                  fill="black"
                                  fillOpacity="0.7"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                          {/*begin::Navigation*/}
                          <ul className="navi navi-hover">
                            <li className="navi-header pb-1">
                              <span className="text-primary text-uppercase font-weight-bolder font-size-sm">
                                Add new:
                              </span>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-shopping-cart-1" />
                                </span>
                                <span className="navi-text">Order</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-calendar-8" />
                                </span>
                                <span className="navi-text">Event</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-danger label-inline font-weight-bold">
                                    new
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-graph-1" />
                                </span>
                                <span className="navi-text">Report</span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-rocket-1" />
                                </span>
                                <span className="navi-text">Post</span>
                                <span className="navi-link-badge">
                                  <span className="label label-light-success label-rounded font-weight-bolder">
                                    5
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="navi-item">
                              <a href="#" className="navi-link">
                                <span className="navi-icon">
                                  <i className="flaticon2-writing" />
                                </span>
                                <span className="navi-text">File</span>
                              </a>
                            </li>
                          </ul>
                          {/*end::Navigation*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-7">
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 flex-shrink-0 mr-3">
                        <img alt="Pic" src="assets/media/users/150-5.jpg" />
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Marcus Smart
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $8300
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-info flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          AH
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Andreas Hawks
                          </a>
                          <span className="text-muted font-weight-bold">
                            Python Developer
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $740
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-success flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          SC
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Sarah Connor
                          </a>
                          <span className="text-muted font-weight-bold">
                            HTML, CSS. jQuery
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $92
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 flex-shrink-0 mr-3">
                        <img alt="Pic" src="assets/media/users/150-7.jpg" />
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Amanda Harden
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $10,500
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-6">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-danger flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          SR
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Sean Robbins
                          </a>
                          <span className="text-muted font-weight-bold">
                            UI/UX, Art Director
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $204
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-35 symbol-light-primary flex-shrink-0 mr-3">
                        <span className="symbol-label font-weight-bolder font-size-lg">
                          JT
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap flex-row-fluid">
                        {/*begin::Text*/}
                        <div className="d-flex flex-column pr-5 flex-grow-1">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg"
                          >
                            Jason Tatum
                          </a>
                          <span className="text-muted font-weight-bold">
                            ASP.NET Developer
                          </span>
                        </div>
                        {/*end::Text*/}
                        {/*begin::Label*/}
                        <span className="text-dark-50 font-weight-bold font-size-lg py-2">
                          $1.270
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::List Widget 2*/}
              </div>
              <div className="col-lg-4">
                {/*begin::List Widget 3*/}
                <div className="card card-custom card-stretch gutter-b">
                  {/*begin::Header*/}
                  <div className="card-header border-0 pt-7">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder font-size-h4 text-dark-75">
                        Audio Files
                      </span>
                      <span className="text-muted mt-3 font-weight-bold font-size-lg">
                        479 Tracks
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <ul className="nav nav-pills nav-pills-sm nav-dark">
                        <li className="nav-item ml-0">
                          <a
                            className="nav-link py-2 px-4 font-weight-bolder font-size-sm"
                            data-toggle="tab"
                            href="#kt_tab_list_3_1"
                          >
                            Latest
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link py-2 px-4 active font-weight-bolder font-size-sm"
                            data-toggle="tab"
                            href="#kt_tab_list_3_2"
                          >
                            Popular
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-2">
                    <div className="tab-content mt-5" id="myTabList3">
                      {/*begin::Tap pane*/}
                      <div
                        className="tab-pane fade"
                        id="kt_tab_list_3_1"
                        role="tabpanel"
                        aria-labelledby="kt_tab_list_3_1"
                      >
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              AirTicks Meeting
                            </a>
                            <span className="text-muted font-weight-bold">
                              1.4MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              From a Distance
                            </a>
                            <span className="text-muted font-weight-bold">
                              8MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Space Weawer
                            </a>
                            <span className="text-muted font-weight-bold">
                              409MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Sunspots
                            </a>
                            <span className="text-muted font-weight-bold">
                              26MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Ocean Drive
                            </a>
                            <span className="text-muted font-weight-bold">
                              3.2MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Soar, Eco
                            </a>
                            <span className="text-muted font-weight-bold">
                              209MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div
                        className="tab-pane fade show active"
                        id="kt_tab_list_3_2"
                        role="tabpanel"
                        aria-labelledby="kt_tab_list_3_2"
                      >
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Sunspots
                            </a>
                            <span className="text-muted font-weight-bold">
                              26MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Ocean Drive
                            </a>
                            <span className="text-muted font-weight-bold">
                              3.2MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Soar, Eco
                            </a>
                            <span className="text-muted font-weight-bold">
                              209MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              AirTicks Meeting
                            </a>
                            <span className="text-muted font-weight-bold">
                              1.4MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center mb-7">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              From a Distance
                            </a>
                            <span className="text-muted font-weight-bold">
                              8MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Btn*/}
                          <a
                            href="#"
                            className="btn btn-icon btn-light-primary font-weight-bold btn-md mr-3"
                          >
                            <span className="svg-icon svg-icon-xxl">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Play.svg*/}
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
                                    d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                          {/*end::Btn*/}
                          {/*begin::Text*/}
                          <div className="d-flex flex-column flex-grow-1">
                            <a
                              href="#"
                              className="text-dark text-hover-primary mb-1 font-size-lg font-weight-bolder"
                            >
                              Space Weawer
                            </a>
                            <span className="text-muted font-weight-bold">
                              409MB
                            </span>
                          </div>
                          {/*end::Text*/}
                          {/*begin::Dropdown*/}
                          <div
                            className="dropdown dropdown-inline ml-2"
                            data-toggle="tooltip"
                            title
                            data-placement="left"
                            data-original-title="Quick actions"
                          >
                            <a
                              href="#"
                              className="btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ki ki-dots" />
                            </a>
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                              {/*begin::Navigation*/}
                              <ul className="navi navi-hover">
                                <li className="navi-header font-weight-bold py-4">
                                  <span className="font-size-lg">
                                    Choose Option:
                                  </span>
                                  <i
                                    className="flaticon2-information icon-md text-muted"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title
                                    data-original-title="Click to learn more..."
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
                        {/*end::Item*/}
                      </div>
                      {/*end::Tap pane*/}
                    </div>
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::List Widget 3*/}
              </div>
            </div>
            {/*end::Row*/}
            {/*end::Dashboard*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Entry*/}
      </div>
    </MainLayout>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
