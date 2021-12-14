import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Template, MessageList, ChatList, ChatText } from "../components";
import { getConversationsFB } from "../store/conversations";
import { getMessagesFB } from "../store/messages";

export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  useEffect(() => {
    dispatch(getConversationsFB());
    dispatch(getMessagesFB());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Template chats={<ChatList />} messages={<ChatText />} />}
      />
      <Route
        path="/:roomId"
        element={<Template chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
