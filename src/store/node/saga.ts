import { SagaIterator, eventChannel } from 'redux-saga';
import { all, put, takeLatest, call, take, select } from 'redux-saga/effects';
import { CONNECT } from './types';
import { connectionFailed, connectionSuccessful } from './actions';
import { createNode } from '../../utils/libp2p';
import { addMessage, SEND_MESSAGE, SendMessageAction } from '../messages';
import { ApplicationState } from '../store';

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(CONNECT, connectSaga),
    takeLatest(SEND_MESSAGE, sendMessageSaga)
  ]);
}

const getMessage = (node: any, floodSub: any) => {
  return eventChannel(emitter => {
    floodSub.on('mycryptochat/message', (message: any) => {
      emitter(message);
    });

    return async () => {
      await node.stop();
    };
  });
};

export function* connectSaga(): SagaIterator {
  try {
    const { node, floodSub } = yield call(createNode);
    yield put(connectionSuccessful({ node, floodSub }));

    const channel = yield call(getMessage, node, floodSub);
    while (true) {
      const { from, data } = yield take(channel);
      console.log(from, data.toString());

      yield put(addMessage({
        ...JSON.parse(data.toString()),
        isSelf: node.peerInfo.id.toB58String() === from,
      }));
    }
  } catch (error) {
    yield put(connectionFailed(error));
  }
}

const getConnection = (store: ApplicationState) => store.node.connection;

export function* sendMessageSaga({ payload }: SendMessageAction): SagaIterator {
  const { floodSub } = yield select(getConnection);
  floodSub.publish('mycryptochat/message', new Buffer(JSON.stringify(payload)));
}
