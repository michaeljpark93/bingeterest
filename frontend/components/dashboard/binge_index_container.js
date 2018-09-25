import { connect } from 'react-redux';
import BingeIndex from './binge_index.jsx';
import { fetchBoards } from '../../actions/board_actions';
import { fetchBinges } from '../../actions/binge_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ entities }) => ({
  binges: Object.values(entities.binges),
  boards: Object.values(entities.boards),
});

const mapDispatchToProps = dispatch => ({
  fetchBinges: () => dispatch(fetchBinges()),
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BingeIndex);
