import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchBinges } from '../../actions/binge_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectBoardBinges } from '../../reducers/selectors';
import BoardShow from './board_show';

const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  currentUser: entities.users[session.id],
  board: entities.boards[ownProps.match.params.boardId],
  binges: selectBoardBinges(entities, ownProps.match.params.boardId),
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchBinges: () => dispatch(fetchBinges()),
  fetchBingings: () => dispatch(fetchBingings()),
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
