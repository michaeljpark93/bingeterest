import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBinge, updateBinge, deleteBinge } from '../../actions/binge_actions';
import { removeErrors } from '../../actions/error_actions';
import BingeUpdateForm from './binge_update_form';

const mapStateToProps = ({ entities, session, errors }, ownProps, binge) => ({
  currentUser: entities.users[session.id],
  binge: entities.binges[ownProps.location.pathname.split('/').pop()],
  errors: errors.binges,
});

const mapDispatchToProps = dispatch => ({
  fetchBinge: userId => dispatch(fetchBinge(userId)),
  updateBinge: binge => dispatch(updateBinge(binge)),
  deleteBinge: binge => dispatch(deleteBinge(binge)),
  removeErrors: () => dispatch(removeErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BingeUpdateForm));
