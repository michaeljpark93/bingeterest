import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

// import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashFormContainer from './session/splash_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
