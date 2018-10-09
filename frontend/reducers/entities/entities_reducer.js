import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bingesReducer from './binges_reducer';
import boardsReducer from './boards_reducer';
import bingingsReducer from './bingings_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  binges: bingesReducer,
  boards: boardsReducer,
  bingings: bingingsReducer,
  search: searchReducer,
});

export default entitiesReducer;
