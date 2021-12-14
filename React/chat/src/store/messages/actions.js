import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
} from "./types";

export const sendMessage = (message, roomId, delay = 200) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay,
  },
});
export const deleteMessage = (messageId, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, roomId },
});
export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});
export const sendMessageStart = () => ({
  type: SEND_MESSAGE_START,
});

export const sendMessageSuccess = (roomId, message) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: { roomId, message },
});

export const sendMessageError = (error) => ({
  type: SEND_MESSAGE_ERROR,
  payload: error,
});
export const deleteMessageStart = () => ({
  type: DELETE_MESSAGE_START,
});

export const deleteMessageSuccess = (messageId, roomId) => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload: { messageId, roomId },
});

export const deleteMessageError = (error) => ({
  type: DELETE_MESSAGE_ERROR,
  payload: error,
});
