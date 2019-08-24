import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest, call } from 'redux-saga/effects';
import { CONNECT } from './types';
import { connectionSuccessful } from './actions';
import { createNode } from '../../utils/libp2p';

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(CONNECT, connectSaga)]);
}

export function* connectSaga(): SagaIterator {
  const node = yield call(createNode);

  yield put(connectionSuccessful(node));
}
