import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <h1>Bingeterest</h1>
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
