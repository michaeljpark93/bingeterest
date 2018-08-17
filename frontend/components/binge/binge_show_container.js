import { connect } from 'react-redux';
import { fetchBinge } from '../../actions/binge_actions';
import { fetchBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BingeShow from './binge_show';

const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  currentUser: entities.users[session.id],
  binge: entities.binges[ownProps.match.params.bingeId],
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  fetchBinge: id => dispatch(fetchBinge(id)),
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeShow);
