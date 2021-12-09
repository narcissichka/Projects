import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (message, roomId, delay = 200) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay,
  },
});
export const deleteMessage = (messageId, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, roomId },
});
