import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { PrivateRoute } from '../../auth/PrivateRoute';
import Links from './Pages/Links';
import Package from "./Pages/Package";
import PackageLink from './Pages/PackageLink';
import Option from './Pages/Option'
// import PropTypes from 'prop-types';

// Package.propTypes = {
    
// };

function Configuration(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <PrivateRoute exact path={match.url} component={Package} />
      <PrivateRoute
        exact
        path={`${match.url}/quan-ly-goi`}
        component={Package}
      />
      <Route path={`${match.url}/quan-ly-link`} component={Links} />
      <Route
        path={`${match.url}/quan-ly-goi/:Id/link`}
        component={PackageLink}
      />
      <Route path={`${match.url}/quan-ly-goi/:Id/option`} component={Option} />
    </Switch>
  );
}

export default Configuration;