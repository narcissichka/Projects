import {
  SET_SESSION_START,
  SET_SESSION_ERROR,
  SET_SESSION_SUCCESS,
} from "./types";

const initialSate = {
  user: null,
  sessionLoading: true,
  sessionError: null,
};

export const sessionReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_SESSION_START:
      return {
        ...state,
        sessionLoading: true,
        sessionError: null,
      };

    case SET_SESSION_SUCCESS:
      return {
        ...state,
        sessionLoading: false,
        user: action.payload,
      };

    case SET_SESSION_ERROR:
      return {
        ...state,
        sessionLoading: false,
        sessionError: action.payload,
      };
    default:
      return state;
  }
};
