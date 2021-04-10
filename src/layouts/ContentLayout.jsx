import React from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

ContentLayout.propTypes = {};

function ContentLayout(props) {
  const theme = useSelector((state) => state.theme);
  return (
    <React.Fragment>
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className={`${theme[4].Width === "fixed" ? "container" : "container-fluid"}`}>
          {props.children}
        </div>
        {/*end::Container*/}
      </div>
    </React.Fragment>
  );
}

export default ContentLayout;
