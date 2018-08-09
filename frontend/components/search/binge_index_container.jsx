import { connect } from 'react-redux';

import BingeIndex from './binge_index';
import { fetchBinges } from '../../actions/binge_actions';

const msp = (state, ownProps) => {
  return {
    binges: state.binges
  };
};

const mdp = dispatch => {
  return {
    fetchBinges: () => dispatch(fetchBinges())
  };
};

export default connect(msp, mdp)(BingeIndex)
