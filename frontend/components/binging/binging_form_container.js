import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBinging, deleteBingingFromBoard } from '../../actions/binging_actions';
import { selectUserBoards } from '../../reducers/selectors';
import BingingForm from './binging_form.jsx';

const mapStateToProps = ({ session, entities, ui }, ownProps) => ({
  currentUser: session.currentUser,
  modal: ui.modal,
});

const mapDispatchToProps = dispatch => ({
  createBinging: binging => dispatch(createBinging(binging)),
  deleteBingingFromBoard: binging => dispatch(deleteBingingFromBoard(binging)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BingingForm));
