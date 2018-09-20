import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/nav_bar_container';
import UserBoardsContainer from '../board/user_boards_container';
import UserBingesContainer from '../binge/user_binges_container';

const Headers = (props) => {
  const { selectedPane, panes } = props;
  const headers = panes.map((pane, idx) => {
    const { title } = pane;
    const klass = idx === selectedPane ? 'active' : '';

    return (
      <li
        key={idx}
        className={klass}
        onClick={() => props.onTabChosen(idx)}
      >
        {title}
      </li>
    );
  });

  return <ul className="tab-header">{headers}</ul>;
};

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0,
      paneContent: '',
      profilePic: window.images.profpic,
      username: '',
    };
    this.selectTab = this.selectTab.bind(this);
    this.selectPaneContent = this.selectPaneContent.bind(this);
  }

  componentDidMount() {
    const { fetchUser, user, userId } = this.props;
    fetchUser(user.id).then(this.setState({ profilePic: user.photoUrl, username: user.username }));
  }

  selectTab(num) {
    this.setState({ selectedPane: num }, () => this.selectPaneContent(num));
  }

  selectPaneContent(num) {
    const { user } = this.state;
    switch (num) {
      case 0:
        return this.setState({
          paneContent: <UserBoardsContainer user={user} />,
        });
      case 1:
        return this.setState({
          paneContent: <UserBingesContainer user={user} />,
        });
      default:
        return this.setState({
          paneContent: <UserBoardsContainer user={user} />,
        });
    }
  }

  render() {
    const {
      selectedPane, paneContent, profilePic, username,
    } = this.state;
    const { panes } = this.props;

    return (
      <div>
        <NavBarContainer />

        <div className="profile">
          <div className="user-info">
            <div className="user-info-box">
              <div className="username">
                <h2>{username}</h2>

                <div className="follow-box">
                  <h2>FOLLOWERS</h2>
                  <h2>FOLLOWS</h2>
                </div>
              </div>

              <div className="pf-picture">
                <img className="user-pf" src={profilePic} alt="" />
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="tabs-box">
              <Headers
                selectedPane={selectedPane}
                onTabChosen={this.selectTab}
                panes={panes}
              />
            </div>
          </div>

          <div className="user-profile-content">
            <div className="public-content">{paneContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);
