import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import SplashFormContainer from './session/splash_form_container';
import Dashboard from './dashboard/binge_index_container';
import Navbar from './navbar/nav_bar_container';
import UserShowContainer from './profile/user_show_container';
import BoardShowContainer from './board/board_show_container';
import BingeShowContainer from './binge/binge_show_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={Navbar} />
    <AuthRoute path="/splash" component={SplashFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
    <ProtectedRoute exact path="/user/:userId/:following" component={UserShowContainer} />
    <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer} />
    <ProtectedRoute path="/binges/:bingeId" component={BingeShowContainer} />
    <ProtectedRoute exact path="/" component={Dashboard} />
  </div>
);

// const App = () => (
//   <div>
//     <Switch>
//       <ProtectedRoute exact path="/" component={Dashboard} />
//       <AuthRoute path="/splash" component={SplashFormContainer} />
//       <AuthRoute path="/login" component={LoginFormContainer} />
//       <AuthRoute path="/signup" component={SignupFormContainer} />
//       <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
//       <ProtectedRoute path="/users/:userId/:following" component={UserShowContainer} />
//       <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer} />
//       <ProtectedRoute path="/binges/:bingeId" component={BingeShowContainer} />
//     </Switch>
//   </div>
// );

export default App;
