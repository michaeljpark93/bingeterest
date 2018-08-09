import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password'],
  fieldType: {username: 'Text', password: 'Password'},
  formText: ['Log in to see more', 'Log in', 'Forgot your password?'],
  linkTo: <Link to="/signup">Sign up for an account</Link>,
  demoUser: {username: 'Guest', password: 'password'}
});

const mapDispatchToProps = dispatch => ({
  actionType: formUser => dispatch(login(formUser)),
  demo: demoUser => (dispatch(login(demoUser)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
