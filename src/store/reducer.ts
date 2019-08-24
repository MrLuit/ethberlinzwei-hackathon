import { Reducer, combineReducers } from 'redux';
import { ApplicationState } from './store';
import { reducer as messages } from './messages'
import { reducer as node } from './node'

const rootReducer: Reducer<ApplicationState> = combineReducers({
  messages,
  node
});

export default rootReducer;
