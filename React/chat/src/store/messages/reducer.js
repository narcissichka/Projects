import { nanoid } from "nanoid";
import { format } from "date-fns";
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
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,
  sendMessageLoading: false,
  sendMessageError: null,
  deleteMessageLoading: false,
  deleteMessageError: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS:
    case SEND_MESSAGE:
      return {
        ...state,
        sendMessageLoading: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
              time: format(new Date(), "HH:MM:SS dd-MM-yyyy"),
              id: nanoid(),
            },
          ],
        },
      };
    case DELETE_MESSAGE_SUCCESS:
    case DELETE_MESSAGE:
      return {
        ...state,
        deleteMessageLoading: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return { ...state };

    case GET_MESSAGES_START:
      return {
        ...state,
        messagesLoading: true,
        messagesError: null,
      };

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };

    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };

    case SEND_MESSAGE_START:
      return { ...state, sendMessageLoading: true, sendMessageError: null };

    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        sendMessageLoading: false,
        sendMessageError: action.payload,
      };

    case DELETE_MESSAGE_START:
      return { ...state, deleteMessageLoading: true, deleteMessageError: null };

    case DELETE_MESSAGE_ERROR:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: action.payload,
      };
    default:
      return state;
  }
};
