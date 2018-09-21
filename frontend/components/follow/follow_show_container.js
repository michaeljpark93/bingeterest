import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import FollowShow from './follow_show.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: Object.values(session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowShow);
