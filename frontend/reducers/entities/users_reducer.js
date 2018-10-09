import merge from 'lodash/merge';

import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, action.user);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
