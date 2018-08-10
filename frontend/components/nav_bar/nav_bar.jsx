import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      search: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleInput(e) {
    this.setState({ search: e.currentTarget.value });
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <navBar>
        <div>
          <div className="n-logo">
            <img src={window.images.logo} />
          </div>
          <input type="text" onChange={this.handleInput} placeholder="Search" />
          <Link to="/">HOME</Link>
          <Link to="/">FOLLOWING</Link>
          <Link to="/">EXPLORE</Link>
          <Link to="/">
            <div>{currentUser.username[0]}</div>
            <div>{currentUser.username}</div>
          </Link>

          <Link to="/">...
            <ul>
              <li>Edit settings</li>
              <li>Get help</li>
              <li>See terms and privacy</li>
              <li>
                <input type="submit" onClick={this.handleLogout} value="Log out" />
              </li>
            </ul>
          </Link>

          <button onClick={() => {logout}}>Logout</button>
        </div>
      </navBar>
    );
  }
}

export default withRouter(NavBar);
