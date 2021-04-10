import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { PATH } from "../constants/paths";
import Loading from "../components/Loading";
import { PrivateRoute } from "../auth/PrivateRoute";
import history from "../helpers/history";
const NotFound = lazy(() => import("../components/NotFound/index"));
const Dashboard = lazy(() => import("../features/Dashboard/index"));
const Login = lazy(() => import("../features/Login/index"));
const Registration = lazy(() => import("../features/Registration/index"));
const Forgot = lazy(() => import("../features/Forgot/index"));
const Settings = lazy(() => import("../features/Settings/index"));
const Builder = lazy(() => import("../features/Builder/index"));
const Account = lazy(() => import("../features/Account/index"));
const Staff = lazy(() => import("../features/Staff/index"));

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from={PATH.HOME} to="/dashboard" />
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
