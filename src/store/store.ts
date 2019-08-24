import { Store, createStore as createReduxStore, applyMiddleware, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MessagesState } from './messages';
import rootReducer from './reducer';

export interface ApplicationState {
  messages: MessagesState;
}

export const createStore = (): Store<ApplicationState, AnyAction> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(rootReducer, applyMiddleware(sagaMiddleware));

  // TODO: Add sagas
  // sagaMiddleware.run(fooSaga);

  return store;
};
