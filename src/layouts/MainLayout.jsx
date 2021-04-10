import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuickUser from "../components/QuickUser";
import Sidebar from "../components/Sidebar";
import { addLinkScript, removeLinkScript } from "../helpers/LoadScript";
// import PropTypes from 'prop-types';

MainLayout.propTypes = {};

function MainLayout(props) {
  useEffect(() => {
    addLinkScript("/assets/js/scripts.bundle.js", function () {
      // callback này được gọi sau khi file được load thành công
      window.KTStart();
    });
    return () => {
      removeLinkScript("/assets/js/scripts.bundle.js");
    };
  }, []);
  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <Sidebar />
          <div className="d-flex flex-column flex-row-fluid wrapper">
            <Header />
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
      <QuickUser />
    </React.Fragment>
  );
}

export default MainLayout;
