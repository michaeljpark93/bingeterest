import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashFormContainer from './session/splash_form_container';
import BingeIndexContainer from './dashboard/binge_index_container';
import UserShowContainer from './profile/user_show_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/discover" component={BingeIndexContainer} />
      <ProtectedRoute exact path="/boards/:boardId" component={BingeIndexContainer} />
      <AuthRoute path="/" component={SplashFormContainer} />
    </Switch>
  </div>
);

export default App;
