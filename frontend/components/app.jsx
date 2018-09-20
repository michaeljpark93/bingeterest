import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import SplashFormContainer from './session/splash_form_container';
import Dashboard from './dashboard/binge_index_container';
import UserShowContainer from './profile/user_show_container';
import BoardShowContainer from './board/board_show_container';
import BingeShowContainer from './binge/binge_show_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/discover" component={Dashboard} />
      <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
      <ProtectedRoute exact path="/binges/:bingeId" component={BingeShowContainer} />
      <AuthRoute path="/" component={SplashFormContainer} />
    </Switch>
  </div>
);

export default App;
