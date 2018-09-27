import { connect } from 'react-redux';
import { createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { removeErrors } from '../../actions/error_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form.jsx';

const mapStateToProps = ({ errors, session, ui }) => ({
  currentUser: session.currentUser,
  modal: ui.modal,
  errors: errors.boards,
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: id => dispatch(deleteBoard(id)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
