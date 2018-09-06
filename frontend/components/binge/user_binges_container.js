import { connect } from "react-redux";
import { selectUserBinges } from "../../reducers/selectors";
import { fetchUserBinges } from "../../actions/binge_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import UserBinges from "./user_binges";

const mapStateToProps = ({ entities, session }, ownProps) => {
  return {
    binges: selectUserBinges(entities, ownProps.user.id),
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBinges: userId => dispatch(fetchUserBinges(userId)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBinges);
