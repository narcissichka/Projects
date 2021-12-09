import { handleChangeMessageValue } from "../conversations";
import { sendMessage } from "./actions";

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
