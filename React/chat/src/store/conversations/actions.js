import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  PUT_CONVERSATION_START,
  PUT_CONVERSATION_SUCCESS,
  PUT_CONVERSATION_ERROR,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_ERROR,
  DELETE_CONVERSATION_START,
  DELETE_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});
export const deleteConversationStart = () => ({
  type: DELETE_CONVERSATION_START,
});
export const deleteConversationSuccess = (roomId) => ({
  type: DELETE_CONVERSATION_SUCCESS,
  payload: roomId,
});
export const deleteConversationError = (error) => ({
  type: DELETE_CONVERSATION_ERROR,
  payload: error,
});
export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const putConversationStart = () => ({
  type: PUT_CONVERSATION_START,
});

export const putConversationSuccess = (conversations) => ({
  type: PUT_CONVERSATION_SUCCESS,
  payload: conversations,
});

export const putConversationError = (error) => ({
  type: PUT_CONVERSATION_ERROR,
  payload: error,
});
