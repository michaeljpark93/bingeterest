import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SplashForm from './splash_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password', 'age'],
  fieldType: {username: 'text', password: 'password', age: 'integer'},
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => (dispatch(signup(formUser))),
  login: demoUser => (dispatch(login(demoUser))),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
