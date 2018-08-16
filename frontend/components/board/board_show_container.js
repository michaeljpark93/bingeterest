import { connect } from 'react-redux';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  currentUser: entities.users[session.id],
  board: entities.boards[ownProps.match.params.boardId],
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  deleteBoard: board => dispatch(deleteBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
