import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

Footer.propTypes = {};

function Footer(props) {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
      {/*begin::Container*/}
      <div
        className={`${
          theme[5].Width === "fixed" ? "container" : "container-fluid"
        } d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        {/*begin::Copyright*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2">2021©</span>
          <a
            href="/"
            target="_blank"
            className="text-dark-75 text-hover-primary"
          >
            EZS.VN
          </a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Nav*/}
        <div className="nav nav-dark">
          <Link to="/" className="nav-link pl-0 pr-2">
            Giới thiệu
          </Link>
          <Link to="/" className="nav-link pr-2">
            Hướng dẫn
          </Link>
          <Link to="/" className="nav-link pr-0">
            Liên hệ
          </Link>
        </div>
        {/*end::Nav*/}
      </div>
      {/*end::Container*/}
    </div>
  );
}

export default Footer;
