import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class FollowItemShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userShow: null,
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow(userId) {
    const { currentUser, createFollow } = this.props;
    const { router } = this.context;
    const follow = {
      user_id: userId,
      follower_id: currentUser.id,
    };

    createFollow({ follow }).then((userData) => {
      this.setState({ userShow: userData.user });
    });
  }

  handleUnfollow(userId) {
    const { currentUser, deleteFollow } = this.props;
    const follow = {
      user_id: userId,
      follower_id: currentUser.id,
    };
    deleteFollow({ follow }).then((userData) => {
      this.setState({ userShow: userData.user });
    });
  }

  render() {
    const { user, currentUser } = this.props;
    const { userShow } = this.state;
    if (userShow !== null) {
      return <Redirect to={`/users/${userShow.id}`} />;
    }
    const followers = (user && user.followers) ? Object.values(user.followers).length : 0;
    const binges = (user && user.user_binges) ? Object.values(user.user_binges) : [];

    return (
      <div className="user-follows">
        <Link to={`/users/${user.id}`}>
          <div className="user-follow-detail">
            <div className="picture-box">
              {user.photoUrl ? <img className="user-pic" src={user.photoUrl} alt="" /> : <img className="user-pic" src={window.images.profpic} alt="" />}
              <div className="binges-box">
                {binges[1] ? <img className="binges" src={binges[1].photoUrl} alt="" /> : <div className="placeholder" />}
                {binges[2] ? <img className="binges" src={binges[2].photoUrl} alt="" /> : <div className="placeholder" />}
                {binges[3] ? <img className="binges" id="last" src={binges[3].photoUrl} alt="" /> : <div className="placeholder" id="last" />}
              </div>
            </div>
            <div className="user-details">
              <h3>{user.username}</h3>
              <h4>{`${followers} Followers`}</h4>
            </div>
          </div>
        </Link>

        {user.followed
          ? <button className="user-follow-button" type="button" onClick={() => this.handleUnfollow(user.id)}> Unfollow</button>
          : <button className="user-follow-button" type="button" onClick={() => this.handleFollow(user.id)}>Follow</button>}
      </div>
    );
  }
}

export default FollowItemShow;
