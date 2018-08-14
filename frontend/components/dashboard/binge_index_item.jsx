import React from 'react';
import { Link } from 'react-router-dom';

const BingeIndexItem = (props) => (
  <li className="binge">
    <img src={props.binge.photoUrl} />
    <button className="binge-link">{props.binge.url}</button>
  </li>
);

export default BingeIndexItem;
