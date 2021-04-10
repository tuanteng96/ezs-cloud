import React from "react";
import { useSelector } from "react-redux";
import "./css/style.scss";
// import PropTypes from 'prop-types';

Loading.propTypes = {};

function Loading(props) {
  const page = useSelector((state) => state.theme);

  switch (page[1].Loader) {
    case "spinner":
      return (
        <div className="page-loader" data-loading="spinner">
          <div className="spinner spinner-primary" />
        </div>
      );

    default:
      return <div>Loading ...</div>;
  }
}

export default Loading;
