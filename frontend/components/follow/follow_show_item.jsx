import React from 'react';
import { Link } from 'react-router-dom';

const FollowItemShow = (props) => {
  const {
    user, currentUser, handleFollow, handleUnfollow,
  } = props;
  const followers = (user && user.followers) ? Object.values(user.followers).length : 0;

  return (
    <div className="user-follow-detail">
      <Link to={`/users/${user.id}`}>
        <img className="user-pic" src={user.photoUrl} alt="" />
        <h3>{user.username}</h3>
        <h4>{`${followers} Followers`}</h4>
      </Link>
      {currentUser.followed
        ? <button className="follow-button" type="button" onClick={handleUnfollow}>Unfollow</button>
        : <button className="follow-button" type="button" onClick={handleFollow}>Follow</button>}
    </div>
  );
};

export default FollowItemShow;
