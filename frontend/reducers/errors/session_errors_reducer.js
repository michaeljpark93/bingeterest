import merge from 'lodash/merge';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../../actions/error_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge([], action.errors);
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer;
