import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import splashPage from './splash_page';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
