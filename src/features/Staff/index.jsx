import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { PrivateRoute } from '../../auth/PrivateRoute';
import AddStaff from './Pages/Add';
import EditStaff from "./Pages/Edit";
import Advanced from './Pages/Advanced';
import Main from './Pages/Main';
// import PropTypes from 'prop-types';

Staff.propTypes = {
    
};

function Staff(props) {
    const match = useRouteMatch();
  return (
      <Switch>
        <PrivateRoute exact path={match.url} component={Main} />
        <PrivateRoute path={`${match.url}/advanced`} component={Advanced} />
        <PrivateRoute path={`${match.url}/add`} component={AddStaff} />
        <PrivateRoute path={`${match.url}/:StaffID`} component={EditStaff} />
        <PrivateRoute path={`${match.url}/:StaffID`} component={EditStaff} />
      </Switch>
  );
}

export default Staff;