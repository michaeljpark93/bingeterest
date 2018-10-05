import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BingesErrorsReducer from './binges_errors_reducer';
import BoardsErrorsReducer from './boards_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  binges: BingesErrorsReducer,
  boards: BoardsErrorsReducer,
});

export default errorsReducer;
