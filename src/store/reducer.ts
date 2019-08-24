import { Reducer, combineReducers } from 'redux';
import { ApplicationState } from './store';
import { reducer as messages } from './messages'

const rootReducer: Reducer<ApplicationState> = combineReducers({
  messages
});

export default rootReducer;
