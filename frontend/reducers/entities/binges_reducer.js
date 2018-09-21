import merge from 'lodash/merge';

import {
  RECEIVE_BINGES,
  RECEIVE_BINGE,
  REMOVE_BINGE,
} from '../../actions/binge_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const bingesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BINGES:
      return merge({}, action.binges);
    case RECEIVE_BINGE:
      return merge({}, state, { [action.binge.id]: action.binge });
    case REMOVE_BINGE:
      const newState = merge({}, state);
      delete newState[action.binge.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default bingesReducer;
