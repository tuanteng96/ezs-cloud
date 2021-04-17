import React from "react";
import { Link } from "react-router-dom";
import "./css/style.scss";
// import PropTypes from "prop-types";

NotFound.propTypes = {};

function NotFound() {
  return (
    <div className="page-notfound" style={{ backgroundImage: "url(/assets/media/error/bg3.jpg)" }}>
      <div className="d-flex flex-column flex-root">
        {/*begin::Error*/}
        <div className="d-flex flex-column-fluid align-items-first justify-content-center">
          <div className="d-flex flex-column align-items-center px-10 pt-10 pt-lg-30">
            {/*begin::Content*/}
            <h1
              className="font-weight-boldest text-white mb-5"
              style={{ fontSize: "8rem" }}
            >
              404
            </h1>
            <p className="display-3 text-center text-white font-weight-normal py-3">
              OOPS! Page Not Found...
            </p>
            <Link
              to="/"
              className="btn btn-pill btn-transparent-white font-weight-bolder py-4 px-8"
            >
              <span className="svg-icon svg-icon-md mr-3">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-left.svg*/}
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
                      transform="translate(12.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-12.000000, -12.000000)"
                      x={11}
                      y={5}
                      width={2}
                      height={14}
                      rx={1}
                    />
                    <path
                      d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
              Quay về Trang Chủ
            </Link>
            {/*end::Content*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
