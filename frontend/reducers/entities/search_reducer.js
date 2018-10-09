import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SEARCH_RESULTS, RESET_SEARCH_RESULTS } from '../../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.searchResults);
    case RESET_SEARCH_RESULTS:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
