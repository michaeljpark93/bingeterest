import { connect } from 'react-redux';
import { updateBinge, deleteBinge } from '../../actions/binge_actions';
import { removeErrors } from '../../actions/error_actions';
import { closeModal } from '../../actions/modal_actions';
import BingeForm from './binge_form.jsx';

const mapStateToProps = ({ errors, session, ui }) => ({
  currentUser: session.currentUser,
  modal: ui.modal,
  errors: errors.binges,
});

const mapDispatchToProps = dispatch => ({
  updateBinge: binge => dispatch(updateBinge(binge)),
  deleteBinge: bingeId => dispatch(deleteBinge(bingeId)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeForm);
