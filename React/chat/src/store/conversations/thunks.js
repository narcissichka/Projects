import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  putConversationStart,
  putConversationSuccess,
  putConversationError,
  deleteConversationStart,
  deleteConversationSuccess,
  deleteConversationError,
} from "./actions";

export const getConversationsFB = () => async (dispatch, _, api) => {
  const conversations = [];
  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const putConversationFB = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(putConversationStart());
    await api.addConversationApi(roomId);
    dispatch(putConversationSuccess(roomId));
  } catch (e) {
    dispatch(putConversationError(e));
  }
};
export const deleteConversationFB = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(deleteConversationStart());
    await api.deleteConversationApi(roomId);
    dispatch(deleteConversationSuccess(roomId));
  } catch (e) {
    dispatch(deleteConversationError(e));
  }
};
