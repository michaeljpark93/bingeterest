import React from 'react';
import { Link } from 'react-router-dom';

class UserBoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.stopPropagation();
    this.props.edit("createBoard");
  }

  render() {
    return (
      <Link to={`/boards/${this.props.board.id}`}>
        <div className="user-board">
          <div className="board-box"></div>
          <div className="board-content">
            <div className="board-text">
              <h3 className="title">{this.props.board.name}</h3>
              <h3 className="board-pins">binges</h3>
            </div>
            <div onClick={this.handleSubmit}>
              <div className="icon-box">
                <img className="edit-icon" src={window.images.pen} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default UserBoardItem;
