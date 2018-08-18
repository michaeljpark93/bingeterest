import React from 'react';
import { withRouter } from 'react-router-dom';
import BingeIndexItem from '../dashboard/binge_index_item';
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
    this.props.fetchBinges();
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal("editBoard");
  }

  render() {
    const currentUser = this.props.currentUser;
    const board = this.props.board;
    const profilePic = currentUser.photoUrl ? <img className="user-pf" src={currentUser.photoUrl} /> : <img className="standard-pf" src={window.images.profpic} />
    const count = this.props.binges.length

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
              <h2>{count} binges</h2>
              <h2></h2>
            </div>
          </div>

          <div className="pf-picture">
            {profilePic}
          </div>
        </div>

        <div className="discover">
          <div className="discover-box">
            <ul className="masonry">
              {this.props.binges.map(binge => {
                return <BingeIndexItem
                  binge={binge}
                  key={binge.id} />
              })}
            </ul>
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
