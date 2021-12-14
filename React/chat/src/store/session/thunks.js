import { setSessionStart, setSessionSuccess, setSessionError } from "./actions";
import { firebaseApp } from "../../api/firebase";
export const setSessionFB = () => async (dispatch, _, api) => {
  try {
    dispatch(setSessionStart());
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setSessionSuccess(user));
      } else {
        dispatch(setSessionSuccess(null));
      }
    });
  } catch (e) {
    dispatch(setSessionError(e));
  }
};
