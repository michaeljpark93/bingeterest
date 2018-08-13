import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bingesReducer from './binges_reducer';
import boardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  binges: bingesReducer,
  boards: boardsReducer
});

export default entitiesReducer;
