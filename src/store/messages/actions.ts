import { ActionCreator } from 'redux';
import { ADD_MESSAGE, AddMessageAction, Message, SET_CURRENT_MESSAGE, SetCurrentMessageAction } from './types';

export const addMessage: ActionCreator<AddMessageAction> = (payload: Message) => ({
  type: ADD_MESSAGE,
  payload
});

export const setCurrentMessage: ActionCreator<SetCurrentMessageAction> = (payload: string) => ({
  type: SET_CURRENT_MESSAGE,
  payload
});
