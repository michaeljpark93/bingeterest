import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardShow from './board_show.jsx';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  currentUser: session.currentUser,
  board: entities.boards[ownProps.match.params.boardId],
  users: entities.users,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
