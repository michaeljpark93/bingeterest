import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { removeErrors } from '../../actions/error_actions';
import SplashForm from './splash_form.jsx';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  fields: ['username', 'password', 'age'],
  fieldType: { username: 'text', password: 'password', age: 'integer' },
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => (dispatch(signup(formUser))),
  login: demoUser => (dispatch(login(demoUser))),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
