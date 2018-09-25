import React from 'react';
import { Link } from 'react-router-dom';

const BingeItemShow = (props) => {
  const { binge } = props;

  return (
    <div className="binge-show-wrapper">
      <Link to={`/binges/${binge.id}`}>
        <li className="binge">
          <img src={binge.photoUrl} alt="" />
        </li>
      </Link>

      <a href={binge.link_url} target="_blank">
        <button type="button" className="binge-link">
          <img className="a-logo" src={window.images.arrow} alt="" />
          <h2>{binge.url}</h2>
        </button>
      </a>
    </div>
  );
};

export default BingeItemShow;
