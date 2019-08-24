import { ActionCreator } from 'redux';
import { ADD_MESSAGE, AddMessageAction } from './types';

export const addMessage: ActionCreator<AddMessageAction> = (payload: string) => ({
  type: ADD_MESSAGE,
  payload
});
