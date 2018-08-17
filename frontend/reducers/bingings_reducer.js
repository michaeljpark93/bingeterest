import merge from 'lodash/merge';
import { RECEIVE_BINGING, REMOVE_BINGING } from '../actions/binging_actions';

const bingingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BINGING:
      return merge({}, state, action.binging);
    case REMOVE_BINGING:
      const newState = merge({}, state);
      delete newState[action.binging.id];
      return newState;
    default:
      return state;
  };
};

export default bingingsReducer;
