import merge from 'lodash/merge';

import {
  RECEIVE_BINGES,
  RECEIVE_BINGE,
  REMOVE_BINGE
} from '../actions/binge_actions';

const bingesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BINGES:
      return merge({}, state, action.binges);
    case RECEIVE_BINGE:
      return merge({}, state, {[action.binge.id]: action.binge});
    case REMOVE_BINGE:
    const newState = merge({}, state);
    delete newState[action.bingeId];
    return newState;
    default:
      return state;
  }
}

export default bingesReducer;
