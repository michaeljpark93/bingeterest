import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <div>LOGO PLACEHOLDER</div>
      <input type="text" placeholder="Search">SEARCH PLACEHOLDER</input>
      <Link to="/">HOME PLACEHOLDER</Link>
      <Link to="/">FOLLOWING PLACEHOLDER</Link>
      <Link to="/">EXPLORE PLACEHOLDER</Link>
      <Link to="/">
        <div>{currentUser.username[0]}</div>
        <div>{currentUser.username}</div>
      </Link>
      <Link to="/">... PLACEHOLDER</Link>
      <button onClick={() => {logout}}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="buttons" to="/login">Log in</Link>
    </div>
  );
  return(
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};
