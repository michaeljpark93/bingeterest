import React from 'react';

export default class ErrorsList extends React.Component {
  render() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }
};
