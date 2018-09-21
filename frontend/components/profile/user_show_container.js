import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectUser, selectFollowers } from '../../reducers/selectors';
import {
  createFollow,
  deleteFollow,
  fetchFollowers,
} from '../../actions/follow_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserShow from './user_show.jsx';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  user: selectUser(entities, ownProps.match.params.userId),
  currentUser: Object.values(session),
  ownProps,
  // follows: selectFollows({ entities }, session.id),
  // followers: selectFollowers({ entities }, session.id),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  fetchFollowers: id => dispatch(fetchFollowers(id)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
