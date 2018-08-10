import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BingeIndexItem = (props) => {
  //temporary show page
  return (
    <li>
      <img src={window.images.one} />
    </li>
  );
};

export default withRouter(BingeIndexItem);
