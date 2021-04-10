import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../auth/PrivateRoute';
import ChangePassword from './Pages/ChangePassword';
import Main from './Pages/Main';

// import PropTypes from 'prop-types';

Account.propTypes = {
    
};

function Account(props) {
    const match = useRouteMatch();
    return (
      <Switch>
        <PrivateRoute exact path={match.url} component={Main} />
        <PrivateRoute path={`${match.url}/change-password`} component={ChangePassword} />
      </Switch>
    );
}

export default Account;