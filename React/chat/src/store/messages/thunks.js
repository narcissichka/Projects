import { handleChangeMessageValue } from "../conversations";
import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  sendMessageStart,
  sendMessageSuccess,
  sendMessageError,
  deleteMessageStart,
  deleteMessageSuccess,
  deleteMessageError,
} from "./actions";

export const sendMessageWithBot =
  (message, roomId) => async (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));
    dispatch(handleChangeMessageValue("", roomId));

    if (message.author === "user") {
      setTimeout(() => {
        dispatch(
          sendMessage(
            { author: "robot", text: "Bot response from thunk" },
            roomId
          )
        );
      }, 500);
    }
  };
export const sendMessageFB = (message, roomId) => async (dispatch, _, api) => {
  try {
    dispatch(sendMessageStart());

    await api.sendMessageApi(roomId, message);

    dispatch(sendMessageSuccess(roomId, message));
    dispatch(handleChangeMessageValue("", roomId));

    if (message.author !== "robot") {
      setTimeout(() => {
        dispatch(
          sendMessageFB(
            { author: "robot", text: "Hello bot from thunk to bd" },
            roomId
          )
        );
      }, 500);
    }
  } catch (e) {
    dispatch(sendMessageError(e));
  }
};
export const deleteMessageFB =
  (messageId, roomId) => async (dispatch, _, api) => {
    try {
      dispatch(deleteMessageStart());

      await api.deleteMessageApi(messageId, roomId);

      dispatch(deleteMessageSuccess(messageId, roomId));
    } catch (e) {
      dispatch(deleteMessageError(e));
    }
  };

export const getMessagesFB = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};
