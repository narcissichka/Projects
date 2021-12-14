import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_ERROR,
  PUT_CONVERSATION_START,
  PUT_CONVERSATION_SUCCESS,
  PUT_CONVERSATION_ERROR,
  DELETE_CONVERSATION_START,
  DELETE_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,
  putConversationLoading: false,
  putConversationError: null,
  deleteConversationLoading: false,
  deleteConversationError: null,
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_CONVERSATION_SUCCESS:
    case CREATE_CONVERSATION:
      return {
        ...state,
        putConversationLoading: false,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
    case DELETE_CONVERSATION_SUCCESS:
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };
    case DELETE_CONVERSATION_START:
      return {
        ...state,
        deleteConversationLoading: true,
        deleteConversationError: null,
      };
    case DELETE_CONVERSATION_ERROR:
      return {
        ...state,
        deleteConversationLoading: false,
        deleteConversationError: action.payload,
      };
    case GET_CONVERSATIONS_START:
      return {
        ...state,
        conversationsLoading: true,
        conversationsError: null,
      };

    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload,
      };

    case GET_CONVERSATIONS_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload,
      };

    case PUT_CONVERSATION_START:
      return {
        ...state,
        putConversationLoading: true,
        putConversationError: null,
      };

    case PUT_CONVERSATION_ERROR:
      return {
        ...state,
        putConversationLoading: false,
        putConversationError: action.payload,
      };
    default:
      return state;
  }
};
