import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/nav_bar_container';
import UserBoards from './user_boards.jsx';
import UserBinges from './user_binges.jsx';
import FollowShow from '../follow/follow_show.jsx';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTab: true,
      bingeTab: false,
      user: null,
      users: null,
    };

    this.handleTab = this.handleTab.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.renderUserContent = this.renderUserContent.bind(this);
    this.renderTabContent = this.renderTabContent.bind(this);
    this.renderFollowCount = this.renderFollowCount.bind(this);
  }

  componentDidMount() {
    const { fetchUsers, ownProps } = this.props;
    const { userId } = ownProps.match.params;
    fetchUsers().then((userData) => {
      const user = Object.values(userData.users)
        .filter(person => person.id === parseInt(userId, 10))[0];
      this.setState({ users: userData.users, user });
      if (userId && ownProps.match.params.following) {
        this.handleTab('follow');
      }
    });
  }

  componentDidUpdate() {
    const { ownProps, fetchUsers } = this.props;
    const { userId } = ownProps.match.params;
    const { user } = this.state;

    if (user && user.id !== parseInt(userId, 10)) {
      fetchUsers().then((userData) => {
        const newUser = Object.values(userData.users)
          .filter(person => person.id === parseInt(userId, 10))[0];
        this.setState({
          users: userData.users,
          user: newUser,
          boardTab: true,
          bingeTab: false,
          followTab: false,
        });
      });
    }
  }

  handleTab(tab) {
    switch (tab) {
      case 'board':
        return this.setState({ boardTab: true, bingeTab: false, followTab: false });
      case 'binge':
        return this.setState({ boardTab: false, bingeTab: true, followTab: false });
      case 'follow':
        return this.setState({ boardTab: false, bingeTab: false, followTab: true });
      default:
        return this.setState({ boardTab: true, bingeTab: false, followTab: false });
    }
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

  renderFollowCount(user) {
    let followers = 0;
    let followees = 0;
    if (user && user.followers) {
      followers = Object.values(user.followers).length;
    }
    if (user && user.followees) {
      followees = Object.values(user.followees).length;
    }

    return (
      <div className="follow-box">
        <div className="follow-details">
          <h2>
            {`${followers} followers`}
          </h2>
          <h2>
            {`${followees} following`}
          </h2>
        </div>
      </div>
    );
  }

  renderUserContent() {
    const { user } = this.state;
    if (user !== null) {
      return (
        <div className="user-info">
          <div className="user-info-box">
            <div className="user-details">
              <div className="username">
                <h2>{user.username}</h2>
                {this.renderFollow()}
              </div>

              {this.renderFollowCount(user)}
            </div>

            <img className="user-pf" src={user.photoUrl} alt="" />
          </div>
        </div>
      );
    }
    return (
      <div className="user-info">
        <div className="user-info-box">
          <div className="user-details" />

          <img className="user-pf" src={window.images.profpic} alt="" />
        </div>
      </div>
    );
  }

  renderTabContent() {
    const {
      user, users, boardTab, bingeTab, followTab,
    } = this.state;
    const {
      currentUser, openModal, closeModal, createFollow, deleteFollow,
    } = this.props;
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
    } if (user !== null && followTab) {
      return (
        <FollowShow
          user={user}
          users={users}
          currentUser={currentUser}
          createFollow={createFollow}
          deleteFollow={deleteFollow}
        />
      );
    }
    return null;
  }

  render() {
    const { boardTab, bingeTab, followTab } = this.state;
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
                <button type="button" className={followTab ? 'active' : 'not-active'} onClick={() => this.handleTab('follow')}>Follows</button>
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
