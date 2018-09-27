import React from 'react';

const ErrorsList = (props) => {
  const { errors } = props;
  if (errors) {
    return (
      <ul className="errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }
  return null;
};

export default ErrorsList;
