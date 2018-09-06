import { connect } from "react-redux";
import BingeIndex from "./binge_index";
import { fetchBoards } from "../../actions/board_actions";
import { fetchBinges } from "../../actions/binge_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    binges: Object.values(state.entities.binges)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBinges: () => dispatch(fetchBinges()),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BingeIndex);
