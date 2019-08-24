import { Action } from 'redux';

export interface NodeState {
  connection?: any; // TODO: set actual type
  isConnecting: boolean;
}

export const CONNECT = 'CONNECT';
export interface ConnectAction extends Action {
  type: typeof CONNECT;
}

export const CONNECTION_SUCCESSFUL = 'CONNECTION_SUCCESSFUL';
export interface ConnectionSuccessfulAction extends Action {
  type: typeof CONNECTION_SUCCESSFUL;
  payload: any; // TODO: set actual type
}

export const CONNECTION_FAILED = 'CONNECTION_FAILED';
export interface ConnectionFailedAction extends Action {
  type: typeof CONNECTION_FAILED;
  payload?: Error;
}

export type NodeActions =
  | ConnectAction
  | ConnectionSuccessfulAction
  | ConnectionFailedAction;
