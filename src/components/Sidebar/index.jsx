import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/paths";
import LinkSidebarLayout from "../../layouts/LinkSidebarLayout";
import TitleSidebarLayout from "../../layouts/TitleSidebarLayout";
import "./css/style.scss";
// import PropTypes from 'prop-types';

Sidebar.propTypes = {};

function Sidebar(props) {
  useEffect(() => {
    const elementsOverlay = document.getElementsByClassName(
      "offcanvas-overlay"
    );
    while (elementsOverlay.length > 0) elementsOverlay[0].remove();
  }, []);

  return (
    <div
      className="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
      id="kt_aside"
    >
      {/*begin::Brand*/}
      <div
        className="brand flex-column-auto"
        id="kt_brand"
        kt-hidden-height={72}
      >
        {/*begin::Logo*/}
        <Link to="/" className="brand-logo">
          <img
            alt="Logo"
            src="/assets/media/logos/logo-ezs.png"
            className="h-25px"
          />
        </Link>
        {/*end::Logo*/}
        {/*begin::Toggle*/}
        <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
          <span className="svg-icon svg-icon svg-icon-xl">
            {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Toggle-Right.svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <rect x={0} y={0} width={24} height={24} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 11.5C22 12.3284 21.3284 13 20.5 13H3.5C2.6716 13 2 12.3284 2 11.5C2 10.6716 2.6716 10 3.5 10H20.5C21.3284 10 22 10.6716 22 11.5Z"
                  fill="black"
                />
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H3.5C2.6716 17 2 17.6716 2 18.5C2 19.3284 2.6716 20 3.5 20H14.5ZM8.5 6C9.3284 6 10 5.32843 10 4.5C10 3.67157 9.3284 3 8.5 3H3.5C2.6716 3 2 3.67157 2 4.5C2 5.32843 2.6716 6 3.5 6H8.5Z"
                  fill="black"
                />
              </g>
            </svg>
            {/*end::Svg Icon*/}
          </span>
        </button>
        {/*end::Toolbar*/}
      </div>
      {/*end::Brand*/}
      {/*begin::Aside Menu*/}
      <div
        className="aside-menu-wrapper flex-column-fluid"
        id="kt_aside_menu_wrapper"
      >
        {/*begin::Menu Container*/}
        <div
          id="kt_aside_menu"
          className="aside-menu my-4 scroll ps ps--active-y"
          data-menu-vertical={1}
          data-menu-scroll={1}
          data-menu-dropdown-timeout={500}
          style={{ height: "412px", overflow: "hidden" }}
        >
          {/*begin::Menu Nav*/}
          <ul className="menu-nav">
            <li className="menu-item" aria-haspopup="true">
              <Link to="/dashboard" className="menu-link">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
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
                        d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                      <path
                        d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Tổng quan</span>
              </Link>
            </li>
            <TitleSidebarLayout action="configuration">
              <li className="menu-section">
                <h4 className="menu-text">Cấu hình</h4>
                <i className="menu-icon ki ki-bold-more-hor icon-md" />
              </li>
            </TitleSidebarLayout>
            <li className="menu-item" aria-haspopup="true">
              <Link
                to={`${PATH.CONFIGURATION}/quan-ly-link`}
                className="menu-link"
              >
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
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
                        d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) "
                      />
                      <path
                        d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                        fill="#000000"
                        transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) "
                      />
                      <path
                        d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) "
                      />
                      <path
                        d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) "
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Quản lý Link</span>
              </Link>
            </li>
            <LinkSidebarLayout Link={`${PATH.CONFIGURATION}/quan-ly-goi`}>
              <li className="menu-item" aria-haspopup="true">
                <Link
                  to={`${PATH.CONFIGURATION}/quan-ly-goi`}
                  className="menu-link"
                >
                  <span className="svg-icon menu-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
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
                          d="M12.7442084,3.27882877 L19.2473374,6.9949025 C19.7146999,7.26196679 20.003129,7.75898194 20.003129,8.29726722 L20.003129,15.7027328 C20.003129,16.2410181 19.7146999,16.7380332 19.2473374,17.0050975 L12.7442084,20.7211712 C12.2830594,20.9846849 11.7169406,20.9846849 11.2557916,20.7211712 L4.75266256,17.0050975 C4.28530007,16.7380332 3.99687097,16.2410181 3.99687097,15.7027328 L3.99687097,8.29726722 C3.99687097,7.75898194 4.28530007,7.26196679 4.75266256,6.9949025 L11.2557916,3.27882877 C11.7169406,3.01531506 12.2830594,3.01531506 12.7442084,3.27882877 Z M12,14.5 C13.3807119,14.5 14.5,13.3807119 14.5,12 C14.5,10.6192881 13.3807119,9.5 12,9.5 C10.6192881,9.5 9.5,10.6192881 9.5,12 C9.5,13.3807119 10.6192881,14.5 12,14.5 Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="menu-text">Quản lý gói</span>
                </Link>
              </li>
            </LinkSidebarLayout>
            <li className="menu-section">
              <h4 className="menu-text">Thương hiệu</h4>
              <i className="menu-icon ki ki-bold-more-hor icon-md" />
            </li>
            <li className="menu-item" aria-haspopup="true">
              <Link to="/" className="menu-link">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Shopping/Box2.svg*/}
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
                        d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                        fill="#000000"
                      />
                      <path
                        d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Thông tin thương hiệu</span>
              </Link>
            </li>
            <li className="menu-item" aria-haspopup="true">
              <Link to="/" className="menu-link">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Design/Color-profile.svg*/}
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
                        d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <circle fill="#000000" cx={12} cy={9} r={5} />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Cơ sở kinh doanh</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Home/Earth.svg*/}
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
                      <circle
                        fill="#000000"
                        opacity="0.3"
                        cx={12}
                        cy={12}
                        r={9}
                      />
                      <path
                        d="M11.7357634,20.9961946 C6.88740052,20.8563914 3,16.8821712 3,12 C3,11.9168367 3.00112797,11.8339369 3.00336944,11.751315 C3.66233009,11.8143341 4.85636818,11.9573854 4.91262842,12.4204038 C4.9904938,13.0609191 4.91262842,13.8615942 5.45804656,14.101772 C6.00346469,14.3419498 6.15931561,13.1409372 6.6267482,13.4612567 C7.09418079,13.7815761 8.34086797,14.0899175 8.34086797,14.6562185 C8.34086797,15.222396 8.10715168,16.1034596 8.34086797,16.2636193 C8.57458427,16.423779 9.5089688,17.54465 9.50920913,17.7048097 C9.50956962,17.8649694 9.83857487,18.6793513 9.74040201,18.9906563 C9.65905192,19.2487394 9.24857641,20.0501554 8.85059781,20.4145589 C9.75315358,20.7620621 10.7235846,20.9657742 11.7357634,20.9960544 L11.7357634,20.9961946 Z M8.28272988,3.80112099 C9.4158415,3.28656421 10.6744554,3 12,3 C15.5114513,3 18.5532143,5.01097452 20.0364482,7.94408274 C20.069657,8.72412177 20.0638332,9.39135321 20.2361262,9.6327358 C21.1131932,10.8600506 18.0995147,11.7043158 18.5573343,13.5605384 C18.7589671,14.3794892 16.5527814,14.1196773 16.0139722,14.886394 C15.4748026,15.6527403 14.1574598,15.137809 13.8520064,14.9904917 C13.546553,14.8431744 12.3766497,15.3341497 12.4789081,14.4995164 C12.5805657,13.664636 13.2922889,13.6156126 14.0555619,13.2719546 C14.8184743,12.928667 15.9189236,11.7871741 15.3781918,11.6380045 C12.8323064,10.9362407 11.963771,8.47852395 11.963771,8.47852395 C11.8110443,8.44901109 11.8493762,6.74109366 11.1883616,6.69207022 C10.5267462,6.64279981 10.170464,6.88841096 9.20435656,6.69207022 C8.23764828,6.49572949 8.44144409,5.85743687 8.2887174,4.48255778 C8.25453994,4.17415686 8.25619136,3.95717082 8.28272988,3.80112099 Z M20.9991771,11.8770357 C20.9997251,11.9179585 21,11.9589471 21,12 C21,16.9406923 17.0188468,20.9515364 12.0895088,20.9995641 C16.970233,20.9503326 20.9337111,16.888438 20.9991771,11.8770357 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Website</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent menu-item-open"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">Applications</span>
                    </span>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-line">
                        <span />
                      </i>
                      <span className="menu-text">Users</span>
                      <span className="menu-label">
                        <span className="label label-rounded label-primary">
                          6
                        </span>
                      </span>
                      <i className="menu-arrow" />
                    </a>
                    <div className="menu-submenu">
                      <i className="menu-arrow" />
                      <ul className="menu-subnav">
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/list-default.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">List - Default</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/list-datatable.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">List - Datatable</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/list-columns-1.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">List - Columns 1</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/list-columns-2.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">List - Columns 2</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/add-user.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Add User</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/user/edit-user.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Edit User</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-line">
                        <span />
                      </i>
                      <span className="menu-text">Profile</span>
                      <i className="menu-arrow" />
                    </a>
                    <div className="menu-submenu">
                      <i className="menu-arrow" />
                      <ul className="menu-subnav">
                        <li
                          className="menu-item menu-item-submenu"
                          aria-haspopup="true"
                          data-menu-toggle="hover"
                        >
                          <a
                            href="javascript:;"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Profile 1</span>
                            <i className="menu-arrow" />
                          </a>
                          <div className="menu-submenu">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                              <li className="menu-item" aria-haspopup="true">
                                <a
                                  href="custom/apps/profile/profile-1/overview.html"
                                  className="menu-link"
                                >
                                  <i className="menu-bullet menu-bullet-line">
                                    <span />
                                  </i>
                                  <span className="menu-text">Overview</span>
                                </a>
                              </li>
                              <li className="menu-item" aria-haspopup="true">
                                <a
                                  href="custom/apps/profile/profile-1/personal-information.html"
                                  className="menu-link"
                                >
                                  <i className="menu-bullet menu-bullet-line">
                                    <span />
                                  </i>
                                  <span className="menu-text">
                                    Personal Information
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item" aria-haspopup="true">
                                <a
                                  href="custom/apps/profile/profile-1/account-information.html"
                                  className="menu-link"
                                >
                                  <i className="menu-bullet menu-bullet-line">
                                    <span />
                                  </i>
                                  <span className="menu-text">
                                    Account Information
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item" aria-haspopup="true">
                                <a
                                  href="custom/apps/profile/profile-1/change-password.html"
                                  className="menu-link"
                                >
                                  <i className="menu-bullet menu-bullet-line">
                                    <span />
                                  </i>
                                  <span className="menu-text">
                                    Change Password
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item" aria-haspopup="true">
                                <a
                                  href="custom/apps/profile/profile-1/email-settings.html"
                                  className="menu-link"
                                >
                                  <i className="menu-bullet menu-bullet-line">
                                    <span />
                                  </i>
                                  <span className="menu-text">
                                    Email Settings
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/profile/profile-2.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Profile 2</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/profile/profile-3.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Profile 3</span>
                          </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                          <a
                            href="custom/apps/profile/profile-4.html"
                            className="menu-link"
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">Profile 4</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="custom/apps/inbox.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-line">
                        <span />
                      </i>
                      <span className="menu-text">Inbox</span>
                      <span className="menu-label">
                        <span className="label label-danger label-inline">
                          new
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Barcode-read.svg*/}
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
                        x={4}
                        y={4}
                        width={8}
                        height={16}
                      />
                      <path
                        d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">APP</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Login</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Wizard</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Pricing Tables</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Invoices</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Devices/Printer.svg*/}
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
                        d="M16,17 L16,21 C16,21.5522847 15.5522847,22 15,22 L9,22 C8.44771525,22 8,21.5522847 8,21 L8,17 L5,17 C3.8954305,17 3,16.1045695 3,15 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,15 C21,16.1045695 20.1045695,17 19,17 L16,17 Z M17.5,11 C18.3284271,11 19,10.3284271 19,9.5 C19,8.67157288 18.3284271,8 17.5,8 C16.6715729,8 16,8.67157288 16,9.5 C16,10.3284271 16.6715729,11 17.5,11 Z M10,14 L10,20 L14,20 L14,14 L10,14 Z"
                        fill="#000000"
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={8}
                        y={2}
                        width={8}
                        height={2}
                        rx={1}
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Mẫu in hóa đơn</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Login</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Wizard</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Pricing Tables</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Invoices</span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-submenu"
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                  >
                    <a href="javascript:;" className="menu-link menu-toggle">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-section">
              <h4 className="menu-text">Cài đặt</h4>
              <i className="menu-icon ki ki-bold-more-hor icon-md" />
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Communication/Shield-user.svg*/}
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
                        d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Nhân viên</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li className="menu-item" aria-haspopup="true">
                    <Link to="/staff/add" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Thêm mới nhân viên</span>
                    </Link>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <Link to="/staff" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Quản lý nhân viên</span>
                    </Link>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <Link to="/staff/advanced" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Nâng cao</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg*/}
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
                <span className="menu-text">SP, NVL, DV, PP</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Shopping/Wallet3.svg*/}
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
                        d="M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M18.5,11 L5.5,11 C4.67157288,11 4,11.6715729 4,12.5 L4,13 L8.58578644,13 C8.85100293,13 9.10535684,13.1053568 9.29289322,13.2928932 L10.2928932,14.2928932 C10.7456461,14.7456461 11.3597108,15 12,15 C12.6402892,15 13.2543539,14.7456461 13.7071068,14.2928932 L14.7071068,13.2928932 C14.8946432,13.1053568 15.1489971,13 15.4142136,13 L20,13 L20,12.5 C20,11.6715729 19.3284271,11 18.5,11 Z"
                        fill="#000000"
                      />
                      <path
                        d="M5.5,6 C4.67157288,6 4,6.67157288 4,7.5 L4,8 L20,8 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L5.5,6 Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Thẻ tiền - Quà tặng</span>
              </Link>
            </li>
            <li className="menu-item" aria-haspopup="true">
              <Link to="/" className="menu-link">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/General/Shield-check.svg*/}
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
                        d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Quyền lợi KH</span>
              </Link>
            </li>
            <li className="menu-item" aria-haspopup="true">
              <Link to="/" className="menu-link">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Shopping/Sale2.svg*/}
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
                      <polygon
                        fill="#000000"
                        opacity="0.3"
                        points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168"
                      />
                      <polygon
                        fill="#000000"
                        points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447"
                      />
                      <path
                        d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Ưu đãi khách hàng</span>
              </Link>
            </li>
            <li className="menu-section">
              <h4 className="menu-text">Quản lý</h4>
              <i className="menu-icon ki ki-bold-more-hor icon-md" />
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Design/Pixels.svg*/}
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
                        y={16}
                        width={4}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        x={4}
                        y={10}
                        width={4}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        x={10}
                        y={16}
                        width={4}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={10}
                        y={10}
                        width={4}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        x={4}
                        y={4}
                        width={4}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        x={16}
                        y={16}
                        width={4}
                        height={4}
                        rx={1}
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Pos quản lý</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Layout/Layout-top-panel-1.svg*/}
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
                        x={2}
                        y={4}
                        width={19}
                        height={4}
                        rx={1}
                      />
                      <path
                        d="M3,10 L6,10 C6.55228475,10 7,10.4477153 7,11 L7,19 C7,19.5522847 6.55228475,20 6,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,11 C2,10.4477153 2.44771525,10 3,10 Z M10,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,19 C14,19.5522847 13.5522847,20 13,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M17,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,19 C21,19.5522847 20.5522847,20 20,20 L17,20 C16.4477153,20 16,19.5522847 16,19 L16,11 C16,10.4477153 16.4477153,10 17,10 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Bảng lịch</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
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
                      <rect x={0} y={0} width={24} height={24} />
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
                <span className="menu-text">Sổ quỹ</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-left-panel-2.svg*/}
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
                        d="M10,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,7 C22,7.55228475 21.5522847,8 21,8 L10,8 C9.44771525,8 9,7.55228475 9,7 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M10,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L21,16 C21.5522847,16 22,16.4477153 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                        fill="#000000"
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={2}
                        y={4}
                        width={5}
                        height={16}
                        rx={1}
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Kho hàng</span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="/" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-horizontal.svg*/}
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
                        x={4}
                        y={5}
                        width={16}
                        height={6}
                        rx="1.5"
                      />
                      <rect
                        fill="#000000"
                        x={4}
                        y={13}
                        width={16}
                        height={6}
                        rx="1.5"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">HCNS</span>
                <i className="menu-arrow" />
              </Link>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Communication/Chat-check.svg*/}
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
                        d="M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z"
                        fill="#000000"
                        fillRule="nonzero"
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
                <span className="menu-text">Chăm sóc khách hàng</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li className="menu-item" aria-haspopup="true">
                    <a
                      href="features/file-upload/image-input.html"
                      className="menu-link"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Image Input</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a
                      href="features/file-upload/dropzonejs.html"
                      className="menu-link"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">DropzoneJS</span>
                      <span className="menu-label">
                        <span className="label label-danger label-inline">
                          new
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a
                      href="features/file-upload/uppy.html"
                      className="menu-link"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Uppy</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/Shopping/Chart-bar1.svg*/}
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
                        x={12}
                        y={4}
                        width={3}
                        height={13}
                        rx="1.5"
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={7}
                        y={9}
                        width={3}
                        height={8}
                        rx="1.5"
                      />
                      <path
                        d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={17}
                        y={11}
                        width={3}
                        height={6}
                        rx="1.5"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Báo cáo - Thống kê</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">Cards</span>
                    </span>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="features/cards/general.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">General Cards</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="features/cards/stacked.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Stacked Cards</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="features/cards/tabbed.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Tabbed Cards</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a
                      href="features/cards/draggable.html"
                      className="menu-link"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Draggable Cards</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="features/cards/tools.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Cards Tools</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a href="features/cards/sticky.html" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Sticky Cards</span>
                    </a>
                  </li>
                  <li className="menu-item" aria-haspopup="true">
                    <a
                      href="features/cards/stretched.html"
                      className="menu-link"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Stretched Cards</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="menu-item menu-item-submenu"
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <Link to="javascript:;" className="menu-link menu-toggle">
                <span className="svg-icon menu-icon">
                  {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-02-21-151229/theme/demo1/dist/../src/media/svg/icons/General/Attachment2.svg*/}
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
                        d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) "
                      />
                      <path
                        d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                        fill="#000000"
                        transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) "
                      />
                      <path
                        d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) "
                      />
                      <path
                        d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) "
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className="menu-text">Nâng cao</span>
                <i className="menu-arrow" />
              </Link>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li className="menu-item" aria-haspopup="true">
                    <Link to="/builder" className="menu-link">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Cấu hình</span>
                      <span className="menu-label">
                        <span className="label label-danger label-inline">
                          Mới
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/*end::Menu Nav*/}
          <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{ left: "0px", width: "0px" }}
            />
          </div>
          <div
            className="ps__rail-y"
            style={{ top: "0px", height: "412px", right: "4px" }}
          >
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{ top: "0px", height: "145px" }}
            />
          </div>
        </div>
        {/*end::Menu Container*/}
      </div>
      {/*end::Aside Menu*/}
    </div>
  );
}

export default Sidebar;
