import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateUser = userData => dispatch => (
  UserAPIUtil.updateUser(userData).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
