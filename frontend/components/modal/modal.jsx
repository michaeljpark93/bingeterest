import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import BoardFormContainer from '../board/board_form_container';
import BingeFormContainer from '../binge/binge_form_container';
import BingingFormContainer from '../binging/binging_form_container';

function Modal({ modal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'createBoard':
      component = <BoardFormContainer />;
      break;
    case 'editBoard':
      component = <BoardFormContainer data={modal.data} />;
      break;
    case 'createBinge':
      component = <BingeFormContainer />;
      break;
    case 'editBinge':
      component = <BingeFormContainer data={modal.data} />;
      break;
    case 'createBinging':
      component = <BingingFormContainer data={modal.data} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
