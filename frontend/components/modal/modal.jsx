import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import BoardFormContainer from '../board/board_form_container';
import BoardUpdateContainer from '../board/board_update_container';
import BingeFormContainer from '../binge/binge_form_container';
import BingeUpdateContainer from '../binge/binge_update_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createBoard':
      component = <BoardFormContainer cancel={closeModal}/>;
      break;
    case 'editBoard':
      component = <BoardUpdateContainer cancel={closeModal}/>;
      break;
    case 'createBinge':
      component = <BingeFormContainer cancel={closeModal}/>;
      break;
    case 'editBinge':
      component = <BingeUpdateContainer cancel={closeModal}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
