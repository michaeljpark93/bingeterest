import { connect } from 'react-redux';
import { createBinge } from '../../actions/binge_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/error_actions';
import BingeCreateForm from './binge_create_form';

const mapStateToProps = ({ errors, session, entities: { users } }) => ({
  currentUser: users[session.id],
  errors: errors.binges
});

const mapDispatchToProps = dispatch => ({
  processForm: binge => dispatch(createBinge(binge)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeCreateForm);
