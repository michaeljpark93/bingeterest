import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <header>
        <nav className="nav-bar">
          <div className="nav-bar-box">
            <div className="n-logo">
              <Link to="/">
                <img className="n-logo" src={window.images.logo} alt="" />
              </Link>
            </div>

            <SearchBarContainer />

            <div className="right-nav">

              <div className="home">
                <Link to="/">Home</Link>
              </div>

              <div className="following">
                <Link to={`/users/${currentUser.id}/following`}>Following</Link>
              </div>

              <div className="explore">
                <Link to="/">Explore</Link>
              </div>

              <Link to={`/users/${currentUser.id}`}>
                <div className="name-holder">
                  <div className="name-tag">
                    {currentUser.username[0]}
                  </div>
                  <div className="name">
                    {currentUser.username.split(' ')[0]}
                  </div>
                </div>
              </Link>

              <div tabIndex="0" className="nav-menu">
                ...
                <ul className="dropdown">
                  <a href="https://www.linkedin.com/in/michaeljpark93/">
                    <li>Linkedin</li>
                  </a>

                  <a href="https://github.com/michaeljpark93">
                    <li>GitHub</li>
                  </a>

                  <li onClick={this.handleLogout}>Log out</li>
                </ul>
              </div>
            </div>
          </div>

        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
