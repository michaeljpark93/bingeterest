import * as FollowAPIUtil from '../util/follow_api_util';
import { receiveErrors } from './error_actions';
import { receiveUser } from './user_actions';

export const createFollow = follow => dispatch => (
  FollowAPIUtil.createFollow(follow).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
