import { ActionCreator } from 'redux';
import {
  ADD_MESSAGE,
  AddMessageAction,
  Message, SEND_MESSAGE,
  SendMessageAction,
  SET_CURRENT_MESSAGE,
  SetCurrentMessageAction
} from './types';

export const addMessage: ActionCreator<AddMessageAction> = (payload: Message) => ({
  type: ADD_MESSAGE,
  payload
});

export const setCurrentMessage: ActionCreator<SetCurrentMessageAction> = (payload: string) => ({
  type: SET_CURRENT_MESSAGE,
  payload
});

export const sendMessage: ActionCreator<SendMessageAction> = (payload: Message) => ({
  type: SEND_MESSAGE,
  payload
});
