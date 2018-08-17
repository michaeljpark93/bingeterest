import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import NavBarContainer from '../nav_bar/nav_bar_container';
import UserBoardsContainer from '../board/user_boards_container';
import UserBingesContainer from '../binge/user_binges_container';

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, idx) => {
      const title = pane.title;
      const klass = idx === selected ? 'active' : '';

      return (
        <li
          key={idx}
          className={klass}
          onClick={() => this.props.onTabChosen(idx)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
 }
}

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0,
      paneContent: <UserBoardsContainer />
    };
    this.selectTab = this.selectTab.bind(this);
    this.selectPaneContent = this.selectPaneContent.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  selectTab(num) {
    this.setState({selectedPane: num}, () => this.selectPaneContent(num));
  }

  selectPaneContent(num) {
    switch (num) {
      case 0:
        return this.setState({paneContent: <UserBoardsContainer />});
      case 1:
        return this.setState({paneContent: <UserBingesContainer />});
      case 2:
        return this.setState({paneContent: <UserBoardsContainer />});
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    const pane = this.props.panes[this.state.selectedPane];
    const selectedPane = pane.title.slice(0, -1);
    const profilePic = currentUser.photoUrl ? <img className="user-pf" src={currentUser.photoUrl} /> : <img className="standard-pf" src={window.images.profpic} />

    return (
      <div>

        <NavBarContainer />

        <div className="profile">
          <div className="user-info">
            <div className="user-info-box">
              <div className="username">
                <h2>{currentUser.username}</h2>

                <div className="follow-box">
                  <h2>{this.props.followers}</h2>
                  <h2>{this.props.follows}</h2>
                </div>
              </div>

              <div className="pf-picture">
                {profilePic}
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="tabs-box">
              <Headers
                selectedPane={this.state.selectedPane}
                onTabChosen={this.selectTab}
                panes={this.props.panes} />
            </div>
          </div>

          <div className="user-profile-content">
            <div className="public-content">
              {this.state.paneContent}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(UserShow);
