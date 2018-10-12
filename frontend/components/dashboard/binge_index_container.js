import { connect } from 'react-redux';
import BingeIndex from './binge_index.jsx';
import { fetchBinges } from '../../actions/binge_actions';
import { createBinging } from '../../actions/binging_actions';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: session.currentUser,
  binges: Object.values(entities.binges),
});

const mapDispatchToProps = dispatch => ({
  fetchBinges: () => dispatch(fetchBinges()),
  createBinging: binging => dispatch(createBinging(binging)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeIndex);
