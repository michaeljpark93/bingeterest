import React from 'react';
import { withRouter } from 'react-router-dom';
import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';
import Modal from '../modal/modal.jsx';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      currentUser: this.props.currentUser,
    };

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    const { fetchBoard, ownProps } = this.props;
    fetchBoard(ownProps.match.params.boardId).then((boardData) => {
      this.setState({ board: boardData.board });
    });
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal('editBoard');
  }

  render() {
    const { board, currentUser } = this.state;

    if (board !== null) {
      const binges = Object.values(board.bingings);
      return (
        <div>
          <NavBarContainer />
          <Modal />

          <div className="board-show">
            <div className="bs-left">
              <div className="board-name">
                <h2>{board.name}</h2>

                <div className="edit-icon-box" onClick={this.handleModal}>
                  <img className="edit-icon" src={window.images.pen} alt="" />
                </div>
              </div>

              <div className="follow-box">
                <h2>
                  {binges.length}
                  {' '}
                  binges
                </h2>
                <h2 />
              </div>
            </div>

            <div className="pf-picture">
              <img className="user-pf" src={currentUser.photoUrl ? currentUser.photoUrl : window.images.profpic} alt="" />
            </div>
          </div>

          <div className="discover">
            <div className="discover-box">
              <ul className="masonry">
                {binges.map(binge => <BingeItemShow binge={binge} key={binge.id} />)}
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return false;
  }
}

export default withRouter(BoardShow);
