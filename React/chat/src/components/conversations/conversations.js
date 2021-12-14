import { Link, useParams, useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  conversationsSelector,
  putConversationFB,
  // createConversation,
  //deleteConversation,
  deleteConversationFB,
} from "../../store/conversations";
import { messagesSelector } from "../../store/messages";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle, CloseSharp, AddSharp } from "@mui/icons-material";
import { useStyles } from "./use-styles";

export const ChatBar = ({ title, selected, handleListItemClick, dispatch }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const messages = useSelector(messagesSelector(title));
  let lastMessage = messages.length ? messages[messages.length - 1] : null;
  const handleDeleteChat = (event) => {
    dispatch(deleteConversationFB(title));
    setTimeout(() => navigate("/chat"), 100);
  };
  return (
    <ListItemButton
      className={styles.listItem}
      selected={selected}
      onClick={handleListItemClick}
      data-testid="wrapper"
    >
      <ListItemIcon>
        <AccountCircle fontSize="medium" className={styles.icon} />
      </ListItemIcon>
      <ListItemText className={`${styles.chatName} chatName`} primary={title} />
      <CloseSharp
        className={styles.delete}
        fontSize="small"
        onClick={handleDeleteChat}
      />
      {lastMessage && (
        <div>
          <Divider />
          <ListItemText
            className={`${styles.author} author`}
            primary={lastMessage.author}
          />
          <ListItemText
            className={`${styles.text} text`}
            primary={lastMessage.text}
          />
        </div>
      )}
    </ListItemButton>
  );
};

export const ChatList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const handleAddChat = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.find(
      (conversation) => conversation.title === name
    );
    if (name && isValidName) {
      // dispatch(putConversationFB(name));
      dispatch(putConversationFB(name));
    } else {
      alert("не валидная комната");
    }
  };
  return (
    <div className={styles.wrapper}>
      <List className={styles.chatList} component="nav">
        {conversations.map((chat) => (
          <Link
            className={styles.link}
            key={chat.title}
            to={`/chat/${chat.title}`}
          >
            <ChatBar
              title={chat.title}
              selected={chat.title === roomId}
              dispatch={dispatch}
            />
            <Divider />
          </Link>
        ))}
      </List>
      <AddSharp
        fontSize="large"
        onClick={handleAddChat}
        className={styles.add}
      />
    </div>
  );
};

export const ChatText = () => {
  const styles = useStyles();
  return <h1 className={styles.chatText}>pick the room...</h1>;
};
