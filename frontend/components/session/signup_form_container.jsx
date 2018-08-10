import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password', 'age'],
  fieldType: {username: 'text', password: 'password', age: 'integer'},
  formText: ['Sign up to see more', 'Continue', 'By continuing, you agree to Bingeterest\'s Terms of Service, Privacy Policy'],
  linkTo: <Link to="/login">Already on Pinterest? Log in</Link>,
});

const mapDispatchToProps = dispatch => ({
  actionType: formUser => (dispatch(signup(formUser))),
  demo: demoUser => (dispatch(login(demoUser)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
