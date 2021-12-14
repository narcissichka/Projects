import {
  SET_SUBMIT,
  EDIT_INFO,
  EDIT_INFO_START,
  EDIT_INFO_SUCCESS,
  EDIT_INFO_ERROR,
  DELETE_INFO,
  GET_SESSION_START,
  GET_SESSION_ERROR,
  GET_SESSION_SUCCESS,
  GET_SUBMIT_START,
  GET_SUBMIT_SUCCESS,
  GET_SUBMIT_ERROR,
  SET_SUBMIT_START,
  SET_SUBMIT_SUCCESS,
  SET_SUBMIT_ERROR,
} from "./types";

export const setSubmit = (value) => ({
  type: SET_SUBMIT,
  payload: value,
});

export const setSubmitStart = () => ({
  type: SET_SUBMIT_START,
});

export const setSubmitSuccess = (value) => ({
  type: SET_SUBMIT_SUCCESS,
  payload: value,
});

export const setSubmitError = (error) => ({
  type: SET_SUBMIT_ERROR,
  payload: error,
});

export const editInfo = (field, value) => ({
  type: EDIT_INFO,
  payload: { field, value },
});

export const editInfoStart = () => ({
  type: EDIT_INFO_START,
});

export const editInfoSuccess = (field, value) => ({
  type: EDIT_INFO_SUCCESS,
  payload: { field, value },
});

export const editInfoError = (error) => ({
  type: EDIT_INFO_ERROR,
  payload: error,
});

export const deleteInfo = () => ({ type: DELETE_INFO });

export const getSessionStart = () => ({
  type: GET_SESSION_START,
});

export const getSessionSuccess = (userInfo) => ({
  type: GET_SESSION_SUCCESS,
  payload: { ...userInfo },
});

export const getSessionError = (error) => ({
  type: GET_SESSION_ERROR,
  payload: error,
});
export const getSubmitStart = () => ({
  type: GET_SUBMIT_START,
});

export const getSubmitSuccess = (submit) => ({
  type: GET_SUBMIT_SUCCESS,
  payload: submit,
});

export const getSubmitError = (error) => ({
  type: GET_SUBMIT_ERROR,
  payload: error,
});
