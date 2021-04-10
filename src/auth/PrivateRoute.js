import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../helpers/localStorageUser";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const useRouter = ["/setting"];
  const isToken = getToken() ? true : false; //getToken() ? true : false;
  const checkRouter = (path) => {
    const isRouter = useRouter.indexOf(path);
    return isRouter !== -1 ? true : false;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isToken === true && checkRouter(path) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};
export { PrivateRoute };
