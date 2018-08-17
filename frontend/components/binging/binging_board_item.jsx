import React from 'react';
import { Link } from 'react-router-dom';

const BingingBoardItem = (props) => (
  <li className="binging">
    <div className="binging-board">
      <h2>{props.board.name}</h2>
    </div>
    <button className="saving-binging" onClick={props.handleSubmit}>
      <img className="binge-icon" src={window.images.binge} />
      <h3 id="binge-icon-title">Binge</h3>
    </button>
  </li>
);

export default BingingBoardItem;
