import React from 'react';
import { Link } from 'react-router-dom';

const UserBoardItem = (props) => (
  <li>

    <Link to={`/boards/${props.board.id}`}>
      <div className="user-board">
        <div className="board-box"></div>
        <div className="board-text">
          <h3 className="title">{props.board.name}</h3>
          <h3 className="board-pins">NUMBER OF PINS PLACEHOLDER</h3>
        </div>
      </div>
    </Link>

  </li>
);

export default UserBoardItem;
