import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserBoardItem from './user_board_item';
import Modal from '../modal/modal';

class UserBoards extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.currentUser.id);
  }

  handleModal(type) {
    return e => {
      e.preventDefault();
      this.props.openModal(type);
    }
  }

  render() {
    return(
      <div>
        <Modal />

        <div className="user-boards">
          <div className="modal-toggle" onClick={this.handleModal("createBoard")}>
            <div className="modal-box">
              <h3>+</h3>
            </div>
            <h3 className="create-title">Create Board</h3>
          </div>

          {this.props.boards.map(board => {
            return <UserBoardItem
              board={board}
              key={board.id}
              edit={this.props.openModal} />
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(UserBoards);
