import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FollowItemShow from './follow_show_item.jsx';

class FollowShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      followees: [],
      others: [],
    };

    // this.handleFollow = this.handleFollow.bind(this);
    // this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleFollows = this.handleFollows.bind(this);
    this.renderUserDetails = this.renderUserDetails.bind(this);
  }

  // handleFollow() {
  //   const { currentUser, createFollow } = this.props;
  //   const { user } = this.state;
  //   const follow = {
  //     user_id: user.id,
  //     follower_id: currentUser.id,
  //   };
  //   createFollow({ follow }).then((userData) => {
  //     this.setState({ user: userData.user });
  //   });
  // }

  // handleUnfollow() {
  //   const { currentUser, deleteFollow } = this.props;
  //   const { user } = this.state;
  //   const follow = {
  //     user_id: user.id,
  //     follower_id: currentUser.id,
  //   };
  //   deleteFollow({ follow }).then((userData) => {
  //     this.setState({ user: userData.user });
  //   });
  // }

  handleFollows() {
    const { user, currentUser, users } = this.props;
    const { followers, followees, others } = this.state;
    if (users !== null) {
      const allUsers = Object.values(users);
      const userFollowers = (user && user.followers)
        ? Object.keys(user.followers).map(userId => parseInt(userId, 10)) : [];
      const userFollowees = (user && user.followees)
        ? Object.keys(user.followees).map(userId => parseInt(userId, 10)) : [];

      for (let i = 0; i < allUsers.length; i += 1) {
        if (userFollowers.includes(allUsers[i].id)) {
          followers.push(allUsers[i]);
        }
        if (userFollowees.includes(allUsers[i].id)) {
          followees.push(allUsers[i]);
        }
        if (!followers.includes(allUsers[i]) || !followees.includes(allUsers[i])) {
          if (currentUser.id === allUsers[i].id) { continue; }
          others.push(allUsers[i]);
        }
      }
    }
    return null;
  }

  renderUserDetails(type) {
    const { currentUser } = this.props;
    if (type.length > 0) {
      return (
        type.map(user => (
          <FollowItemShow
            key={user.id}
            user={user}
            currentUser={currentUser}
            createFollow={this.handleFollow}
            deleteFollow={this.handleUnfollow}
          />
        ))
      );
    }
    return null;
  }

  render() {
    const { followers, followees, others } = this.state;
    this.handleFollows();

    return (
      <div className="follow-container">
        <div className="follow-box">
          <h2>Following</h2>
          <div className="user-follows">
            {this.renderUserDetails(followees)}
          </div>
        </div>
        <div className="follow-box">
          <h2>Followers</h2>
          <div className="user-follows">
            {this.renderUserDetails(followers)}
          </div>
        </div>
        <div className="follow-box">
          <h2>Recommended</h2>
          <div className="user-follows">
            {this.renderUserDetails(others)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FollowShow);
