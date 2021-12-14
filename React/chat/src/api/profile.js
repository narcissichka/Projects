import { db } from "./firebase";

export const getSessionApi = () => db.ref("userInfo").get();
export const getSubmitApi = () => db.ref("submit").get();

export const addInfoToSessionApi = (field, value) => {
  db.ref("userInfo").child(field).set(value);
};
export const setSubmitApi = (value) => {
  db.ref("submit").set(value);
};
