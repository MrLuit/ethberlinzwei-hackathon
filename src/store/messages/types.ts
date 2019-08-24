import { Action } from 'redux';

export interface MessagesState {
  messages: string[];
}

export const ADD_MESSAGE = 'ADD_MESSAGE';
export interface AddMessageAction extends Action {
  type: typeof ADD_MESSAGE;
  payload: string;
}

export type MessagesActions =
  | AddMessageAction;
