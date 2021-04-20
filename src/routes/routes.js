import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { PATH } from "../constants/paths";
import Loading from "../components/Loading";
import { PrivateRoute } from "../auth/PrivateRoute";
import history from "../helpers/history";
import { getUser } from "../helpers/localStorageUser";
const NotFound = lazy(() => import("../components/NotFound/index"));
const Configuration = lazy(() => import("../features/Configuration/index"));
const Dashboard = lazy(() => import("../features/Dashboard/index"));
const Login = lazy(() => import("../features/Login/index"));
const Registration = lazy(() => import("../features/Registration/index"));
const Forgot = lazy(() => import("../features/Forgot/index"));
const Settings = lazy(() => import("../features/Settings/index"));
const Builder = lazy(() => import("../features/Builder/index"));
const Account = lazy(() => import("../features/Account/index"));
const Staff = lazy(() => import("../features/Staff/index"));

export default function Routes() {
  const UI = getUser();
  const defaultLink = UI && UI.UI ? UI.UI.Links[0].Link : "/login";
  return (
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from={PATH.HOME} to={defaultLink} />
            <Route
              path={PATH.CONFIGURATION}
              component={Configuration}
            />
            <PrivateRoute path={PATH.DASHBOARD} component={Dashboard} />
            <PrivateRoute path={PATH.SETTING} component={Settings} />
            <PrivateRoute path={PATH.BUILDER} component={Builder} />
            <PrivateRoute path={PATH.ACCOUNT} component={Account} />
            <PrivateRoute path={PATH.STAFF} component={Staff} />
            <Route path={PATH.LOGIN} component={Login} />
            <Route path={PATH.REGISTRATION} component={Registration} />
            <Route path={PATH.FORGOT} component={Forgot} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Router>
    </Suspense>
  );
}
