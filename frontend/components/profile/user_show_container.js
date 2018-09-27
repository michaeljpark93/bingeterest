import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import {
  createFollow,
  deleteFollow,
} from '../../actions/follow_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserShow from './user_show.jsx';

const mapStateToProps = ({ entities, session, ui }, ownProps) => ({
  user: selectUser(entities, ownProps.match.params.userId),
  currentUser: session.currentUser,
  modalOpen: ui.modal,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
