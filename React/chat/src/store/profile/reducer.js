import {
  SET_NAME,
  SET_SURNAME,
  SET_SEX,
  SET_SUBSCRIPTION,
  SET_SUBMIT,
  DELETE_INFO,
} from "./types";

const initialSate = {
  userInfo: {},
  submit: false,
};

export const profileReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        userInfo: { ...state.userInfo, name: action.payload },
      };
    case SET_SURNAME:
      return {
        ...state,
        userInfo: { ...state.userInfo, surname: action.payload },
      };
    case SET_SUBSCRIPTION:
      return {
        ...state,
        userInfo: { ...state.userInfo, subscription: action.payload },
      };
    case SET_SEX:
      return {
        ...state,
        userInfo: { ...state.userInfo, sex: action.payload },
      };
    case SET_SUBMIT:
      return {
        ...state,
        submit: action.payload,
      };
    case DELETE_INFO:
      return {
        ...state,
        userInfo: {},
      };
    default:
      return state;
  }
};
