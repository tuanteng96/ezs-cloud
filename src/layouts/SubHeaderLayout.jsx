import React from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

SubHeaderLayout.propTypes = {};

function SubHeaderLayout(props) {
  const theme = useSelector((state) => state.theme);
  return (
    <React.Fragment>
      {theme[3].Display === true ? (
        <div
          className={`subheader py-6 py-lg-8 ${
            theme[3].Style === "transparent"
              ? "subheader-transparent"
              : "subheader-solid"
          }`}
          id="kt_subheader"
        >
          <div
            className={`${theme[3].Width === "fixed" ? "container" : "container-fluid"
            } d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
          >
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default SubHeaderLayout;
