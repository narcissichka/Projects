import {
  getSessionStart,
  getSessionSuccess,
  getSessionError,
  getSubmitStart,
  getSubmitSuccess,
  getSubmitError,
  editInfoStart,
  editInfoSuccess,
  editInfoError,
  setSubmitStart,
  setSubmitSuccess,
  setSubmitError,
} from "./actions";

export const getSessionFB = () => async (dispatch, _, api) => {
  let userInfo = {};
  try {
    dispatch(getSessionStart());
    const snapshot = await api.getSessionApi();
    snapshot.forEach((snap) => {
      userInfo[snap.key] = snap.val();
    });
    dispatch(getSessionSuccess(userInfo));
  } catch (e) {
    dispatch(getSessionError(e));
  }
};
export const getSubmitFB = () => async (dispatch, _, api) => {
  let submit = false;
  try {
    dispatch(getSubmitStart());
    const snapshot = await api.getSubmitApi();
    submit = snapshot.val();
    dispatch(getSubmitSuccess(submit));
  } catch (e) {
    dispatch(getSubmitError(e));
  }
};
export const editProfileFB = (field, value) => async (dispatch, _, api) => {
  try {
    dispatch(editInfoStart());

    await api.addInfoToSessionApi(field, value);

    dispatch(editInfoSuccess(field, value));
  } catch (e) {
    dispatch(editInfoError(e));
  }
};
export const setSubmitFB = (value) => async (dispatch, _, api) => {
  try {
    dispatch(setSubmitStart());

    await api.setSubmitApi(value);

    dispatch(setSubmitSuccess(value));
  } catch (e) {
    dispatch(setSubmitError(e));
  }
};
