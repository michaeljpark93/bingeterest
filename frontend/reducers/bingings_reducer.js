import merge from 'lodash/merge';
import { RECEIVE_BINGINGS, REMOVE_BINGING } from '../actions/binging_actions';

const bingingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BINGINGS:
      return merge({}, action.bingings);
    case REMOVE_BINGING:
      const newState = merge({}, state);
      delete newState[action.binging.id];
      return newState;
    default:
      return state;
  };
};

export default bingingsReducer;
