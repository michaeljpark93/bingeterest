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

    this.handleFollows = this.handleFollows.bind(this);
    this.renderUserDetails = this.renderUserDetails.bind(this);
  }

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
        if (followers.includes(allUsers[i]) || followees.includes(allUsers[i])) {
          continue;
        } else {
          if (currentUser.id === allUsers[i].id) { continue; }
          others.push(allUsers[i]);
        }
      }
    }
    return null;
  }

  renderUserDetails(type) {
    const { currentUser, createFollow, deleteFollow } = this.props;
    if (type.length > 0) {
      return (
        type.map(user => (
          <FollowItemShow
            key={`${currentUser.id}${user.id}`}
            user={user}
            currentUser={currentUser}
            createFollow={createFollow}
            deleteFollow={deleteFollow}
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
        <h2>Following</h2>
        <div className="following-box">
          {this.renderUserDetails(followees)}
        </div>
        <h2>Followers</h2>
        <div className="following-box">
          {this.renderUserDetails(followers)}
        </div>
        <h2>Recommended</h2>
        <div className="following-box">
          {this.renderUserDetails(others)}
        </div>
      </div>
    );
  }
}

export default withRouter(FollowShow);
