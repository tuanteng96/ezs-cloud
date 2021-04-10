import React from "react";
import ContentLayout from "../../layouts/ContentLayout";
import MainLayout from "../../layouts/MainLayout";
import SubHeaderLayout from "../../layouts/SubHeaderLayout";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";
import Theme from "./components/Theme";
// import PropTypes from 'prop-types';

Builder.propTypes = {};

function Builder(props) {
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
                Layout Builder
              </h5>
              {/*end::Page Title*/}
              {/*begin::Breadcrumb*/}
              <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                <li className="breadcrumb-item text-muted">
                  <a href className="text-muted">
                    Builder
                  </a>
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
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Communication/Add-user.svg*/}
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
        <ContentLayout>
          {/*begin::Notice*/}
          <div className="card card-custom gutter-b">
            <div className="card-body d-flex py-10">
              {/*begin::Icon*/}
              <div className="d-flex h-70px w-70px flex-center position-relative mt-3 ml-9 mr-17">
                <span className="svg-icon svg-icon-6x svg-icon-primary position-absolute opacity-15">
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Layout/Layout-polygon.svg*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70px"
                    height="70px"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <g stroke="none" strokeWidth={1} fillRule="evenodd">
                      <path
                        d="M28 4.04145C32.3316 1.54059 37.6684 1.54059 42 4.04145L58.3109 13.4585C62.6425 15.9594 65.3109 20.5812 65.3109 25.5829V44.4171C65.3109 49.4188 62.6425 54.0406 58.3109 56.5415L42 65.9585C37.6684 68.4594 32.3316 68.4594 28 65.9585L11.6891 56.5415C7.3575 54.0406 4.68911 49.4188 4.68911 44.4171V25.5829C4.68911 20.5812 7.3575 15.9594 11.6891 13.4585L28 4.04145Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="svg-icon svg-icon-3x svg-icon-primary position-absolute">
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Tools/Tools.svg*/}
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
                        d="M15.9497475,3.80761184 L13.0246125,6.73274681 C12.2435639,7.51379539 12.2435639,8.78012535 13.0246125,9.56117394 L14.4388261,10.9753875 C15.2198746,11.7564361 16.4862046,11.7564361 17.2672532,10.9753875 L20.1923882,8.05025253 C20.7341101,10.0447871 20.2295941,12.2556873 18.674559,13.8107223 C16.8453326,15.6399488 14.1085592,16.0155296 11.8839934,14.9444337 L6.75735931,20.0710678 C5.97631073,20.8521164 4.70998077,20.8521164 3.92893219,20.0710678 C3.1478836,19.2900192 3.1478836,18.0236893 3.92893219,17.2426407 L9.05556629,12.1160066 C7.98447038,9.89144078 8.36005124,7.15466739 10.1892777,5.32544095 C11.7443127,3.77040588 13.9552129,3.26588995 15.9497475,3.80761184 Z"
                        fill="#000000"
                      />
                      <path
                        d="M16.6568542,5.92893219 L18.0710678,7.34314575 C18.4615921,7.73367004 18.4615921,8.36683502 18.0710678,8.75735931 L16.6913928,10.1370344 C16.3008685,10.5275587 15.6677035,10.5275587 15.2771792,10.1370344 L13.8629656,8.7228208 C13.4724413,8.33229651 13.4724413,7.69913153 13.8629656,7.30860724 L15.2426407,5.92893219 C15.633165,5.5384079 16.26633,5.5384079 16.6568542,5.92893219 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </div>
              {/*end::Icon*/}
              {/*begin::Description*/}
              <div className="text-dark-50 font-weight-bold font-size-lg">
                <p>
                  The layout builder is to assist your set and configure your
                  preferred project layout specifications and preview it in real
                  time. The configured layout options will be saved until you
                  change or reset them. To use the layout builder, choose the
                  layout options and click the
                  <code>Preview</code>button to preview the changes and click
                  the
                  <code>Export</code>button to download the HTML template with
                  its includable partials of this demo. In the downloaded folder
                  the partials(header, footer, aside, topbar, etc) will be
                  placed seperated from the base layout to allow you to
                  integrate base layout into your application
                </p>
                <p className="mb-0">
                  <span className="label label-inline label-pill label-danger label-rounded mr-2">
                    NOTE:
                  </span>
                  The downloaded version does not include the assets folder
                  since the layout builder's main purpose is to help to generate
                  the final HTML code without hassle.
                </p>
              </div>
              {/*end::Description*/}
            </div>
          </div>
          {/*end::Notice*/}
          {/*begin::Card*/}
          <div className="card card-custom">
            {/*begin::Header*/}
            <div className="card-header card-header-tabs-line">
              <ul
                className="nav nav-dark nav-bold nav-tabs nav-tabs-line"
                data-remember-tab="tab_id"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#kt_builder_themes"
                    role="tab"
                  >
                    Themes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_page"
                    role="tab"
                  >
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_header"
                    role="tab"
                  >
                    Header
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_subheader"
                    role="tab"
                  >
                    Subheader
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_content"
                    role="tab"
                  >
                    Content
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_aside"
                    role="tab"
                  >
                    Aside
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_sidebar"
                    role="tab"
                  >
                    Sidebar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_footer"
                    role="tab"
                  >
                    Footer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#kt_builder_extras"
                    role="tab"
                  >
                    Extras
                  </a>
                </li>
              </ul>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}

            <div className="tab-content pt-3">
              {/*begin::Tab Pane*/}
              <Theme />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <Page />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <Header />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <SubHeader />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <Content />
              {/*end::Tab Pane*/}
              <Aside />
              {/*begin::Tab Pane*/}
              <Sidebar />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <Footer />
              {/*end::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <Extras />
              {/*end::Tab Pane*/}
            </div>

            {/*end::Body*/}
          </div>
          {/*end::Card*/}
        </ContentLayout>
        {/*end::Entry*/}
      </div>
    </MainLayout>
  );
}

export default Builder;
