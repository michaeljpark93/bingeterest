import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import navBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
