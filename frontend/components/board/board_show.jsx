import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../modal/modal';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.board.id);
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal("editBoard");
  }

  render() {
    const board = this.props.board;
    return(
      <div>
        <NavBarContainer />
        <Modal />

        <div className="board-show">

          <div className="bs-left">
            <div className="board-name">
              <h2>{board.name}</h2>

              <div className="edit-icon-box" onClick={this.handleModal}>
                <img className="edit-icon" src={window.images.pen} />
              </div>
            </div>

            <div className="follow-box">
              <h2>pins</h2>
              <h2>followers</h2>
            </div>
          </div>

          <div className="pf-pic">
            <img src={window.images.profpic} />
          </div>
        </div>

        <div className="board-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardShow);
