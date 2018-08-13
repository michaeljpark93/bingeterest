import { connect } from 'react-redux';
import { createBinge } from '../../actions/binge_actions';
import { removeErrors } from '../../actions/error_actions';
import BingeCreateForm from './binge_create_form';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id],
  ownProps
});

const mapDispatchToProps = dispatch => ({
  createBinge: binge => dispatch(createBinge(binge)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeCreateForm);
