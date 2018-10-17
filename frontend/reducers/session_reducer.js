import merge from 'lodash/merge';
import { debug } from 'util';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({ currentUser: null });

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return merge({}, nullUser);
    default:
      return state;
  }
};

export default sessionReducer;
