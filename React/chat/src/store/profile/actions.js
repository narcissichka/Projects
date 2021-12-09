import {
  SET_NAME,
  SET_SURNAME,
  SET_SEX,
  SET_SUBSCRIPTION,
  SET_SUBMIT,
  DELETE_INFO,
} from "./types";

export const setName = (value) => ({ type: SET_NAME, payload: value });
export const setSurname = (value) => ({ type: SET_SURNAME, payload: value });
export const setSubscription = (value) => ({
  type: SET_SUBSCRIPTION,
  payload: value,
});
export const setSex = (value) => ({ type: SET_SEX, payload: value });
export const setSubmit = (value) => ({ type: SET_SUBMIT, payload: value });
export const deleteInfo = () => ({ type: DELETE_INFO });
