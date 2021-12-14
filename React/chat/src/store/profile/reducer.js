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

const initialSate = {
  userInfo: {},
  submit: false,
  sessionLoading: false,
  sessionError: null,
  submitLoading: false,
  submitError: null,
  editLoading: false,
  editError: null,
  setSubmitLoading: false,
  setSubmitError: null,
};

export const profileReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_SUBMIT_SUCCESS:
    case SET_SUBMIT:
      return {
        ...state,
        setSubmitLoading: false,
        submit: action.payload,
      };
    case SET_SUBMIT_START:
      return {
        ...state,
        setSubmitLoading: true,
        setSubmitError: null,
      };
    case SET_SUBMIT_ERROR:
      return {
        ...state,
        setSubmitLoading: false,
        setSubmitError: action.payload,
      };
    case EDIT_INFO_SUCCESS:
    case EDIT_INFO:
      return {
        ...state,
        editLoading: false,
        userInfo: {
          ...state.userInfo,
          [action.payload.field]: action.payload.value,
        },
      };
    case DELETE_INFO:
      return {
        ...state,
        userInfo: {},
      };
    case GET_SESSION_START:
      return {
        ...state,
        sessionLoading: true,
        sessionError: null,
      };

    case GET_SESSION_SUCCESS:
      return {
        ...state,
        sessionLoading: false,
        userInfo: action.payload,
      };

    case GET_SESSION_ERROR:
      return {
        ...state,
        sessionLoading: false,
        sessionError: action.payload,
      };
    case GET_SUBMIT_START:
      return {
        ...state,
        submitLoading: true,
        submitError: null,
      };

    case GET_SUBMIT_SUCCESS:
      return {
        ...state,
        submitLoading: false,
        submit: action.payload,
      };

    case GET_SUBMIT_ERROR:
      return {
        ...state,
        submitLoading: false,
        submitError: action.payload,
      };

    case EDIT_INFO_START:
      return {
        ...state,
        editLoading: true,
        editError: null,
      };
    case EDIT_INFO_ERROR:
      return {
        ...state,
        editLoading: false,
        editError: action.payload,
      };
    default:
      return state;
  }
};
