import { Reducer } from 'redux';
import { ADD_MESSAGE, MessagesActions, MessagesState } from './types';

const INITIAL_STATE: MessagesState = {
  messages: []
};

export const reducer: Reducer<MessagesState, MessagesActions> = (
  state = INITIAL_STATE,
    action
): MessagesState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
