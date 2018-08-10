import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SplashForm from './splash_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password', 'age'],
  fieldType: {username: 'text', password: 'password', age: 'integer'},
  linkTags: ['About Pinterest', 'Blog', 'Business', 'Terms of Service', 'Private Policy', 'Help', 'iPhone App', 'Android App', 'Users', 'Collections', 'Explore', 'International']
});

const mapDispatchToProps = dispatch => ({
  actionType: formUser => (dispatch(signup(formUser))),
  demo: demoUser => (dispatch(login(demoUser)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
