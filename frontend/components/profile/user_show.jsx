import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import NavBarContainer from '../nav_bar/nav_bar_container';
import UserBoardsContainer from '../board/user_boards_container';
import UserBingesContainer from '../binge/user_binges_container';

const Headers = (props) => {
  const selected = props.selectedPane;
  const headers = props.panes.map((pane, idx) => {
    const title = pane.title;
    const klass = idx === selected ? 'active' : '';

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
      user: { id: null, photoUrl: window.images.profpic, username: '' },
      selectedPane: 0,
      paneContent: '',
    };
    this.selectTab = this.selectTab.bind(this);
    this.selectPaneContent = this.selectPaneContent.bind(this);
  }

  componentDidMount() {
    const { fetchUser, ownProps } = this.props;
    fetchUser(ownProps.match.params.userId);
    this.selectPaneContent(this.state.selectedPane);
    // this.props.fetchFollowers(this.props.user.id);
    // this.props.fetchBingings();
    // this.props.fetchBinges();
  }

  componentDidUpdate() {
    if (this.state.user.id !== this.props.user[0].id) {
      this.setState({ user: this.props.user[0] });
    }
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
      // case 2:
      //   return this.setState({
      //     paneContent: <UserBoardsContainer user={user} />,
      //   });
      default:
        return this.setState({
          paneContent: <UserBoardsContainer user={user} />,
        });
    }
  }

  render() {
    const { user, panes, username } = this.props;
    const { selectPane, paneContent } = this.state;
    const pane = panes[this.state.selectedPane];
    const selectedPane = pane.title.slice(0, -1);
    // const profilePic = user.photoUrl ? (
    //   <img className="user-pf" src={user.photoUrl} />
    // ) : (
    //   <img className="standard-pf" src={window.images.profpic} />
    // );

    return (
      <div>
        <NavBarContainer />

        <div className="profile">
          <div className="user-info">
            <div className="user-info-box">
              <div className="username">
                <h2>{username}</h2>

                <div className="follow-box">
                  <h2>{this.props.followers}</h2>
                  <h2>{this.props.follows}</h2>
                </div>
              </div>

              <div className="pf-picture">
                <img className="user-pf" src={user.photoUrl} />
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
