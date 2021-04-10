import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MainLayout from '../../../../layouts/MainLayout';
import SubHeaderLayout from '../../../../layouts/SubHeaderLayout';
import Aside from '../../components/Aside';
import FormChangePasswod from '../../components/FormChangePassword';
// import PropTypes from 'prop-types';

ChangePassword.propTypes = {
    
};

function ChangePassword(props) {
    return (
      <MainLayout>
        <div
          className="content d-flex flex-column flex-column-fluid"
          id="kt_content"
        >
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
                <h5 className="text-dark font-weight-bold my-1 mr-5">
                  Thay đổi mật khẩu
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
                    <Link to="/account/change-password" className="text-muted">
                      Thay đổi mật khẩu
                    </Link>
                  </li>
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page Heading*/}
            </div>
            {/*end::Info*/}
            {/*begin::Toolbar*/}
            <div className="d-flex align-items-center flex-wrap">
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
          <div className="d-flex flex-column-fluid">
            {/*begin::Container*/}
            <div className="container">
              {/*begin::Profile Personal Information*/}
              <div className="d-flex flex-row">
                {/*begin::Aside*/}
                <div
                  className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
                  id="kt_profile_aside"
                >
                  {/*begin::Nav Panels Wizard 2*/}
                  <Aside />
                  {/*end::Nav Panels Wizard 2*/}
                </div>
                {/*end::Aside*/}
                {/*begin::Content*/}
                <div className="flex-row-fluid ml-lg-8">
                  <FormChangePasswod />
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Profile Personal Information*/}
            </div>
            {/*end::Container*/}
          </div>
        </div>
      </MainLayout>
    );
}

export default ChangePassword;