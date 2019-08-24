import { Reducer } from 'redux';
import { CONNECT, CONNECTION_FAILED, CONNECTION_SUCCESSFUL, NodeActions, NodeState } from './types';

const INITIAL_STATE: NodeState = {
  isConnecting: false
};

export const reducer: Reducer<NodeState, NodeActions> = (
  state = INITIAL_STATE,
    action
): NodeState => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        isConnecting: true
      };
    case CONNECTION_SUCCESSFUL:
      return {
        ...state,
        isConnecting: false,
        connection: action.payload
      };
    case CONNECTION_FAILED:
      return {
        ...state,
        isConnecting: false
      };
    default:
      return state;
  }
};
