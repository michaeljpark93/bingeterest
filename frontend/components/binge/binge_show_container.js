import { connect } from 'react-redux';
import { fetchBinge } from '../../actions/binge_actions';
import { fetchBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BingeShow from './binge_show.jsx';

const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  currentUser: session.currentUser,
  binges: entities.binges,
  errors: errors.boards,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchBinge: bingeId => dispatch(fetchBinge(bingeId)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeShow);
