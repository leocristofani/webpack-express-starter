import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './js/components/app';
import Login from './js/components/login';
import Admin from './js/components/admin/admin';
import AdminDashboard from './js/components/admin/dashboard';
import AdminUsers from './js/components/admin/users';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}/>
      <Route path='admin' component={Admin}>
        <IndexRoute component={AdminDashboard}/>
        <Route path='users' component={AdminUsers}/>
      </Route>
    </Route>
  </Router>
);
