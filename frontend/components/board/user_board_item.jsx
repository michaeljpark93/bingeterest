import React from 'react';
import { Link } from 'react-router-dom';

const UserBoardItem = (props) => (
  <Link to={`/boards/${props.board.id}`}>
    <div className="user-board">
      <div className="board-box"></div>
      <div className="board-content">
        <div className="board-text">
          <h3 className="title">{props.board.name}</h3>
          <h3 className="board-pins">NUM PINS PLCHD</h3>
        </div>
        <div onClick={props.edit}>
          <div className="icon-box">
            <img className="edit-icon" src={window.images.pen} />
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default UserBoardItem;
