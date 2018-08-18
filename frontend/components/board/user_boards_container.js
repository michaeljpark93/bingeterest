import { connect } from 'react-redux';
import { selectUserBoards } from '../../reducers/selectors';
import { fetchBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserBoards from './user_boards';

const mapStateToProps = ({ entities, session }) => {
  return {
    boards: selectUserBoards({entities}, session.id),
    currentUser: entities.users[session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBoards);
