import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { removeErrors } from '../../actions/error_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password', 'age'],
  fieldType: {username: 'text', password: 'password', age: 'integer'},
  linkTo: <Link to="/login">Already on member? Sweet! Log in</Link>,
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => (dispatch(signup(formUser))),
  login: demoUser => (dispatch(login(demoUser))),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
