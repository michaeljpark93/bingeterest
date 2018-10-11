import { connect } from 'react-redux';
import BingeIndex from './binge_index.jsx';
import { fetchBinges } from '../../actions/binge_actions';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: session.currentUser,
  binges: Object.values(entities.binges),
});

const mapDispatchToProps = dispatch => ({
  fetchBinges: () => dispatch(fetchBinges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeIndex);
