import React from 'react';
import { Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { PrivateRoute } from '../../auth/PrivateRoute';
import Main from './Pages/Main';
// import PropTypes from 'prop-types';

// Package.propTypes = {
    
// };

function Package(props) {
  const match = useRouteMatch();
    return (
      <Switch>
        <PrivateRoute exact path={match.url} component={Main} />
        {/* <PrivateRoute
          path={`${match.url}/add`}
          component={ChangePassword}
        /> */}
      </Switch>
    );
}

export default Package;