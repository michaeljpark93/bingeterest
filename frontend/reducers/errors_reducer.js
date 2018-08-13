import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BingesErrorsReducer from './binges_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  binges: BingesErrorsReducer
});

export default errorsReducer;
