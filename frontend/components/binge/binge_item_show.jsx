import React from 'react';
import { Link } from 'react-router-dom';

const BingeItemShow = (props) => {
  const { binge, handleModal } = props;

  return (
    <li className="binge-show-wrapper">

      <button type="button" className="save-binging" id="binging" onClick={() => handleModal(binge)}>
        <img src={window.images.binge} alt="" />
        <h3>Binge</h3>
      </button>

      <Link to={`/binges/${binge.id}`}>
        <div className="binge">
          <img src={binge.photoUrl} alt="" />
        </div>
      </Link>

      <a href={binge.link_url} target="_blank">
        <button type="button" className="binge-link">
          <img className="a-logo" src={window.images.arrow} alt="" />
          <h2>{binge.url}</h2>
        </button>
      </a>
    </li>
  );
};

export default BingeItemShow;
