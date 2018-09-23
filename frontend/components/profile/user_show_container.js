import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import {
  createFollow,
  deleteFollow,
} from '../../actions/follow_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserShow from './user_show.jsx';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  user: selectUser(entities, ownProps.match.params.userId),
  currentUser: session.currentUser,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
