import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const addConversationApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};
export const deleteConversationApi = (roomId) => {
  let ref = db.ref("conversations");
  ref.once("value").then((snapshot) => {
    let conversations = snapshot.val();
    console.log(conversations);
    for (let key in conversations) {
      if (conversations[key].title === roomId) {
        delete conversations[key];
      }
    }
    console.log(conversations);
    ref.set(conversations);
  });
};
