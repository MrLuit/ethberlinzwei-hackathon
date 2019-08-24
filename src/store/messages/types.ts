import { Action } from 'redux';
import { User } from '../users';

export interface Message {
  sender: User;
  content: string;
  isSelf: boolean;
  timestamp: number;
}

export interface MessagesState {
  messages: Message[];
  currentMessage: string;
}

export const ADD_MESSAGE = 'ADD_MESSAGE';
export interface AddMessageAction extends Action {
  type: typeof ADD_MESSAGE;
  payload: Message;
}

export const SET_CURRENT_MESSAGE = 'SET_CURRENT_MESSAGE';
export interface SetCurrentMessageAction extends Action {
  type: typeof SET_CURRENT_MESSAGE;
  payload: string;
}

export type MessagesActions =
  | AddMessageAction
  | SetCurrentMessageAction;
