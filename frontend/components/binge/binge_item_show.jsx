import React from "react";
import { Link } from "react-router-dom";

const BingeItemShow = props => (
  <div className="binge-wrapper">
    <Link to={`/binges/${props.binge.id}`}>
      <li className="binge">
        <img src={props.binge.photoUrl} />
      </li>
    </Link>

    <a href={props.binge.link_url} target="_blank">
      <button className="binge-link">
        <img className="a-logo" src={window.images.arrow} />
        <h2>{props.binge.url}</h2>
      </button>
    </a>
  </div>
);

export default BingeItemShow;
