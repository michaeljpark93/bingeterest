import * as FollowAPIUtil from '../util/follow_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollowers = ({ users,following }) => ({
  type: RECEIVE_FOLLOWERS,
  users, following
});

export const receiveFollow = ({ followed }) => ({
  type: RECEIVE_FOLLOW,
  followed
});

export const removeFollow = ({ followed }) => ({
  type: REMOVE_FOLLOW,
  followed
});

export const fetchFollowers = id => dispatch => (
  FollowAPIUtil.fetchFollowers(id).then(user => (
    dispatch(receiveFollowers(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createFollow = id => dispatch => (
  FollowAPIUtil.createFollow(id).then(follow => (
    dispatch(receiveFollow(follow))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow).then(follow => (
    dispatch(removeFollow(follow))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
