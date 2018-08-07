import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <h1>Bingeterest</h1>
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route path="/login" component={LoginContainer} />
    </Switch>
  </div>
);

export default App;
