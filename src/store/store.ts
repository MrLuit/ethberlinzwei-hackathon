import { Store, createStore as createReduxStore, applyMiddleware, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MessagesState } from './messages';
import rootReducer from './reducer';
import { NodeState, rootSaga as nodeSaga } from './node';

export interface ApplicationState {
  messages: MessagesState;
  node: NodeState;
}

export const createStore = (): Store<ApplicationState, AnyAction> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(nodeSaga);

  return store;
};
