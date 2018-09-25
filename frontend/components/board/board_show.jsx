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
    const { openModal } = this.props;
    e.preventDefault();
    openModal('editBoard');
  }


  render() {
    const { board } = this.state;

    if (board && board.bingings) {
      const binges = Object.values(board.bingings).filter(binging => binging.photoUrl);

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
              <h3>
                &quot;
                {board.description}
                &quot;
              </h3>

              <div className="follow-box">
                <h2>
                  {binges.length}
                  {' '}
                  binges
                </h2>
              </div>
            </div>

            <img className="user-pf" src={board.author_photo ? board.author_photo : window.images.profpic} alt="" />
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
    return null;
  }
}

export default withRouter(BoardShow);
