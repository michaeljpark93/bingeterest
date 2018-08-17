import React from 'react';
import { Link } from 'react-router-dom';

const BingingBoardItem = (props) => (
  <li className="binging">
    <div>PLDR</div>
    <h2>{props.board.name}</h2>
    <button className="save-binging" onClick={props.action}>
      <img src={window.images.binge} />
      <h3>Save</h3>
    </button>
  </li>
);

export default BingingBoardItem;
