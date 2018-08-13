import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/error_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = ({ errors, session, entities: { users } }) => ({
  currentUser: users[session.id],
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  processForm: board => dispatch(createBoard(board)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Board'))}>
      Create board
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm);
