import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const BingeIndexItem = (props) => (
  <li className="binge">
    <img src={props.binge.photoUrl} />

    <a href={props.binge.link_url}>
      <button className="binge-link">
        <img className="a-logo" src={window.images.arrow} />
        <h2>{props.binge.url}</h2>
      </button>
    </a>
  </li>
);

export default BingeIndexItem;
