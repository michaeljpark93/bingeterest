import { connect } from 'react-redux';
import { selectUserBinges } from '../../reducers/selectors';
import { fetchBinges } from '../../actions/binge_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserBinges from './user_binges';

const mapStateToProps = ({ entities, session }) => {
  return {
    binges: selectUserBinges({entities}, session.id),
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBinges: (userId) => dispatch(fetchBinges(userId)),
    otherForm: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBinges);
