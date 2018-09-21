import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchBinges } from '../../actions/binge_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectBoardBinges } from '../../reducers/selectors';
import BoardShow from './board_show';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  currentUser: Object.values(session),
  board: entities.boards[ownProps.match.params.boardId],
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
