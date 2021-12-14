import {
  SET_SESSION_START,
  SET_SESSION_ERROR,
  SET_SESSION_SUCCESS,
} from "./types";

export const setSessionStart = () => ({
  type: SET_SESSION_START,
});

export const setSessionSuccess = (user) => ({
  type: SET_SESSION_SUCCESS,
  payload: { user },
});

export const setSessionError = (error) => ({
  type: SET_SESSION_ERROR,
  payload: error,
});
