import React from 'react';

class ErrorsList extends React.Component {
  render() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }
};

export default ErrorsList;
