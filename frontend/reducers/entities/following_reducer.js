import merge from 'lodash/merge';
import { RECEIVE_FOLLOWERS } from '../../actions/follow_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

const followingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      return action.following || {};
    case RECEIVE_USER:
      return action.following || {};
    default:
      return state;
  }
};

export default followingReducer;
