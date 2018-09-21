import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/nav_bar_container';
import UserBoards from './user_boards.jsx';
import UserBinges from './user_binges.jsx';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTab: true,
      bingeTab: false,
      user: null,
    };
    this.resetUser = this.resetUser.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.renderUserContent = this.renderUserContent.bind(this);
    this.renderTabContent = this.renderTabContent.bind(this);
  }

  componentDidMount() {
    const { fetchUser, ownProps } = this.props;
    fetchUser(ownProps.match.params.userId).then((userData) => {
      this.setState({ user: userData.user });
    });
  }

  componentWillUnmount() {
    this.resetUser();
  }

  resetUser() {
    this.setState({
      boardTab: true,
      bingeTab: false,
      user: null,
    });
  }

  handleTab(tab) {
    if (tab === 'board') {
      return this.setState({ boardTab: true, bingeTab: false });
    }
    return this.setState({ boardTab: false, bingeTab: true });
  }

  handleFollow() {
    const { currentUser, createFollow } = this.props;
    const { user } = this.state;
    const follow = {
      user_id: user.id,
      follower_id: currentUser.id,
    };
    createFollow({ follow }).then((userData) => {
      this.setState({ user: userData.user });
    });
  }

  handleUnfollow() {
    const { currentUser, deleteFollow } = this.props;
    const { user } = this.state;
    const follow = {
      user_id: user.id,
      follower_id: currentUser.id,
    };
    deleteFollow({ follow }).then((userData) => {
      this.setState({ user: userData.user });
    });
  }

  renderUserContent() {
    const { user } = this.state;
    if (user !== null) {
      return (
        <div className="user-info">
          <div className="user-info-box">
            <div className="username">
              <h2>{user.username}</h2>

              <div className="follow-box">
                <h2>FOLLOWERS</h2>
                <h2>FOLLOWS</h2>
                {this.renderFollow()}
              </div>
            </div>

            <div className="pf-picture">
              <img className="user-pf" src={user.photoUrl} alt="" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="user-info">
        <div className="user-info-box">
          <div className="username">
            <div />

            <div className="follow-box">
              <div />
              <div />
            </div>
          </div>

          <div className="pf-picture">
            <img className="user-pf" src={window.images.profpic} alt="" />
          </div>
        </div>
      </div>
    );
  }

  renderTabContent() {
    const { user, boardTab, bingeTab } = this.state;
    const { openModal, closeModal } = this.props;
    if (user !== null && boardTab) {
      if (user && user.user_boards) {
        const boards = Object.values(user.user_boards);
        return (
          <div className="user-profile-content">
            <div className="public-content">
              <UserBoards boards={boards} openModal={openModal} closeModal={closeModal} />
            </div>
          </div>
        );
      }
      const boards = [];
      return (
        <div className="user-profile-content">
          <div className="public-content">
            <UserBoards boards={boards} openModal={openModal} closeModal={closeModal} />
          </div>
        </div>
      );
    } if (user !== null && bingeTab) {
      if (user && user.user_binges) {
        const binges = Object.values(user.user_binges);
        return (
          <div className="user-profile-content">
            <div className="public-content">
              <UserBinges binges={binges} openModal={openModal} closeModal={closeModal} />
            </div>
          </div>
        );
      }
      const binges = [];
      return (
        <div className="user-profile-content">
          <div className="public-content">
            <UserBinges binges={binges} openModal={openModal} closeModal={closeModal} />
          </div>
        </div>
      );
    }
    return null;
  }

  renderFollow() {
    const { user } = this.state;
    const { currentUser } = this.props;
    if (user !== null && currentUser.id !== user.id) {
      if (user.followed) {
        return (
          <button className="follow-button" type="button" onClick={this.handleUnfollow}>Unfollow</button>
        );
      }
      return (
        <button className="follow-button" type="button" onClick={this.handleFollow}>Follow</button>
      );
    }
    return null;
  }

  render() {
    const { boardTab, bingeTab } = this.state;
    return (
      <div>
        <NavBarContainer />

        <div className="profile">
          {this.renderUserContent()}

          <div className="tabs">
            <div className="tabs-box">
              <div className="tab-header">
                <button type="button" className={boardTab ? 'active' : 'not-active'} onClick={() => this.handleTab('board')}>Boards</button>
                <button type="button" className={bingeTab ? 'active' : 'not-active'} onClick={() => this.handleTab('binge')}>Binges</button>
              </div>
            </div>
          </div>

          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);
