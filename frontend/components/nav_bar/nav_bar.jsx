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
      <header>
        <nav className="nav-bar">
          <div className="nav-bar-box">
            <div className="n-logo">
              <Link to="/discover">
                <img className="n-logo" src={window.images.logo} />
              </Link>
            </div>

            <div className="search-bar">
              <div className="search">
                <img src={window.images.mg}/>
              </div>
              <input type="text" onChange={this.handleInput} placeholder="Search" />
            </div>

            <div className="right-nav">

              <div className="home">
                <Link to="/discover">Home</Link>
              </div>

              <div className="following">
                <Link to="/">Following</Link>
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
                    {currentUser.username}
                  </div>
                </div>
              </Link>

              <div tabIndex="0" className="nav-menu">...
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
          </div>

        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
