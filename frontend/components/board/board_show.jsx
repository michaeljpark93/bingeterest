import React from 'react';
import { withRouter } from 'react-router-dom';
import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';
import Modal from '../modal/modal.jsx';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    const { board, fetchBoard, fetchBinges } = this.props;
    fetchBoard(board.id);
    fetchBinges();
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal('editBoard');
  }

  render() {
    const {
      currentUser, binges, errors, board,
    } = this.props;
    const profilePic = currentUser.photoUrl ? (
      <img className="user-pf" src={currentUser.photoUrl} alt="" />
    ) : (
      <img className="standard-pf" src={window.images.profpic} alt="" />
    );
    const count = binges.length;

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
                {count}
                {' '}
                binges
              </h2>
              <h2 />
            </div>
          </div>

          <div className="pf-picture">{profilePic}</div>
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
}

export default withRouter(BoardShow);
