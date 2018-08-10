import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password'],
  fieldType: {username: 'Text', password: 'Password'},
  linkTo: <Link to="/signup">Sign up for an account</Link>
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
