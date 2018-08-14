import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BingeIndexItem = (props) => {
  return (
    <li className="binge">
      <img src={this.props.photoUrl} />
    </li>
  );
};

export default withRouter(BingeIndexItem);
