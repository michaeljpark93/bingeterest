import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bingesReducer from './binges_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  binges: bingesReducer
});

export default entitiesReducer;
