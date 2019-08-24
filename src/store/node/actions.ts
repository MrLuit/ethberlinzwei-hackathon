import { ActionCreator } from 'redux';
import {
  CONNECT,
  ConnectAction, CONNECTION_FAILED,
  CONNECTION_SUCCESSFUL,
  ConnectionFailedAction,
  ConnectionSuccessfulAction
} from './types';

export const connect: ActionCreator<ConnectAction> = () => ({
  type: CONNECT
});

// TODO: Set actual connection type
export const connectionSuccessful: ActionCreator<ConnectionSuccessfulAction> = (payload: any) => ({
  type: CONNECTION_SUCCESSFUL,
  payload
});

export const connectionFailed: ActionCreator<ConnectionFailedAction> = (payload?: Error) => ({
  type: CONNECTION_FAILED,
  payload
});
