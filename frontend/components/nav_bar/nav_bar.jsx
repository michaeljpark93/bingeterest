import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class navBar extends React.Component {
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
        <nav className="nav-bar">
          <div className="n-logo">
            <Link to="/binge">
              <img className="n-logo" src={window.images.logo} />
            </Link>
          </div>

          <div className="search-bar">
            <input type="text" onChange={this.handleInput} placeholder="Search" />
          </div>

          <div className="right-nav">
            <Link to="/">HOME</Link>
            <Link to="/">FOLLOWING</Link>
            <Link to="/">EXPLORE</Link>

            <Link to={`/users/${currentUser.id}`}>
              <div>{currentUser.username[0]}</div>
              <div>{currentUser.username}</div>
            </Link>

            <div>...
              <ul className="dropdown">
                <li>Edit settings</li>
                <li>Get help</li>
                <li>See terms and privacy</li>
                <li>
                  <input type="submit" onClick={this.handleLogout} value="Log out" />
                </li>
              </ul>
            </div>
          </div>


        </nav>
      </navBar>
    );
  }
}

export default withRouter(navBar);
