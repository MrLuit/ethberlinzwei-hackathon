import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';
import { CONNECT } from './types';

export function* rootSaga (): SagaIterator {
  yield all([
    takeLatest(CONNECT, connectSaga)
  ])
}

export function* connectSaga (): SagaIterator {
  // TODO: Connect to other nodes

  // yield put(connectionSuccessful())
}
