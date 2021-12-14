import { useRef, useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import {
  Send,
  ArrowDropDownCircleOutlined,
  CloseSharp,
} from "@mui/icons-material";
import { useStyles } from "./use-styles";
import debounce from "lodash.debounce";
import {
  messagesSelector,
  // deleteMessage,
  deleteMessageFB,
  // sendMessageWithBot,
  sendMessageFB,
} from "../../store/messages";
import {
  conversationsSelector,
  messageValueSelector,
  handleChangeMessageValue,
} from "../../store/conversations";
import { sessionSelector } from "../../store/session";

import { useDispatch, useSelector } from "react-redux";

const Message = ({ message, refWrapper, dispatch, roomId }) => {
  const styles = useStyles(message);
  const refMessage = useRef(null);
  useEffect(() => {
    let block = refWrapper.current;
    let isBottom = block?.scrollTop + window.innerHeight >= block?.scrollHeight;
    if (isBottom) {
      refMessage.current?.scrollIntoView();
    }
  }, [refMessage, refWrapper]);
  const handleDeleteMessage = (event) => {
    dispatch(deleteMessageFB(message.id, roomId));
  };
  return (
    <div ref={refMessage} className={styles.messageCart}>
      <CloseSharp
        className={styles.delete}
        fontSize="small"
        onClick={handleDeleteMessage}
      />
      <p className={styles.messageCartAuthor}>{message.author}</p>
      <p className={styles.messageCartText}>{message.text}</p>
      <p className={styles.messageCartTime}>{message.time}</p>
    </div>
  );
};

export const MessageList = () => {
  const styles = useStyles();

  const { roomId } = useParams();
  const navigate = useNavigate();

  const messages = useSelector(messagesSelector(roomId));
  const conversations = useSelector(conversationsSelector);
  const session = useSelector(sessionSelector);
  const value = useSelector(messageValueSelector(roomId));
  const dispatch = useDispatch();
  const ref = useRef(null);
  const refWrapper = useRef(null);
  let [visible, setVisibility] = useState(false);

  const handleChangeValue = (event) => {
    dispatch(handleChangeMessageValue(event.target.value, roomId));
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  const addMessage = useCallback(() => {
    if (value) {
      dispatch(
        sendMessageFB(
          { author: session?.user?.email ?? "user", text: value },
          roomId
        )
      );
    }
  }, [dispatch, value, roomId, session]);

  useEffect(() => {
    let block = refWrapper.current;
    const cb = debounce(() => {
      let isBottom =
        block?.scrollTop + window.innerHeight >= block?.scrollHeight;
      if (!isBottom) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    }, 200);

    if (refWrapper.current) {
      block?.addEventListener("scroll", cb);
    }

    return () => block?.removeEventListener("scroll", cb);
  }, [refWrapper]);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  useEffect(() => {
    const isValidRoomId = conversations.find(
      (conversation) => conversation.title === roomId
    );

    if (!isValidRoomId && roomId) {
      navigate("/chat");
    }
  }, [roomId, conversations, navigate]);

  return (
    <div className={styles.messageList} ref={refWrapper}>
      {visible && (
        <ArrowDropDownCircleOutlined
          fontSize="large"
          className={styles.downButton}
          onClick={() => {
            refWrapper.current?.scrollTo(0, refWrapper.current?.scrollHeight);
          }}
        />
      )}
      {messages.map((message) => (
        <Message
          dispatch={dispatch}
          message={message}
          refWrapper={refWrapper}
          key={message.id}
          roomId={roomId}
        />
      ))}
      <div className={styles.messageComponent}>
        <div className={styles.messageForm}>
          <Input
            ref={ref}
            className={styles.input}
            placeholder="Message..."
            onChange={handleChangeValue}
            value={value}
            onKeyPress={handlePressInput}
            endAdornment={
              <InputAdornment position="end">
                <Send className={styles.icon} onClick={addMessage} />
              </InputAdornment>
            }
          />
        </div>
      </div>
    </div>
  );
};
