import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setToken } from "../../helpers/localStorageUser";

// import PropTypes from 'prop-types';

// Facebook.propTypes = {

// };

function FacebookLoginAuth(props) {

  let history = useHistory();
  const responseFacebook = (response) => {
      const token = response.accessToken;
      console.log(token);
      setToken(token);
      history.push("/dashboard");
  };

  return (
    <FacebookLogin
      appId="4019216674775693"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
      icon="fa-facebook"
    />
  );
}

export default FacebookLoginAuth;
