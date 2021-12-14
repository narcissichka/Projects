import { nanoid } from "nanoid";
import { db } from "./firebase";
import { format } from "date-fns";

export const getMessagesApi = () => db.ref("messages").get();

export const sendMessageApi = (roomId, message) =>
  db
    .ref("messages")
    .child(roomId)
    .push({
      id: nanoid(),
      time: format(new Date(), "HH:MM:SS dd-MM-yyyy"),
      ...message,
    });

export const deleteMessageApi = (messageId, roomId) => {
  let ref = db.ref("messages").child(roomId);
  ref.once("value").then((snapshot) => {
    let messages = snapshot.val();
    for (let key in messages) {
      if (messages[key].id === messageId) {
        delete messages[key];
      }
    }
    ref.set(messages);
  });
};
