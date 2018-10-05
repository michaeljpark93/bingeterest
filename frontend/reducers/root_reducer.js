import { combineReducers } from 'redux';

import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  errors: errorsReducer,
  session: sessionReducer,
});

export default rootReducer;
