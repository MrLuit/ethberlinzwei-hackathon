import { Reducer } from 'redux';
import { ADD_MESSAGE, MessagesActions, MessagesState, SET_CURRENT_MESSAGE } from './types';

const INITIAL_STATE: MessagesState = {
  messages: [],
  currentMessage: ''
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
    case SET_CURRENT_MESSAGE:
      return {
        ...state,
        currentMessage: action.payload
      };
    default:
      return state;
  }
};
