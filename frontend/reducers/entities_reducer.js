import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bingesReducer from './binges_reducer';
import boardsReducer from './boards_reducer';
import bingingsReducer from './bingings_reducer';
import followingReducer from './following_reducer';
import followedReducer from './followed_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  binges: bingesReducer,
  boards: boardsReducer,
  binging: bingingsReducer,
  following: followingReducer,
  followed: followedReducer,
});

export default entitiesReducer;
