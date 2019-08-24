import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';
import { CONNECT } from './types';
import { connectionSuccessful } from './actions';
import { createNode } from '../../utils/libp2p';

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(CONNECT, connectSaga)]);
}

export function* connectSaga(): SagaIterator {
  const node = createNode()
    .then(console.log)
    .catch(console.error);

  yield put(connectionSuccessful(node));
}
