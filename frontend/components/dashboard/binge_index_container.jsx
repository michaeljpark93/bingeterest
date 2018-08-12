import { connect } from 'react-redux';
import BingeIndex from './binge_index';
import { fetchBinges } from '../../actions/binge_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    binges: Object.values(state.entities.binges)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBinges: () => dispatch(fetchBinges())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BingeIndex);
