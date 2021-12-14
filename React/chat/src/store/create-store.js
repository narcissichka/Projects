import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { getGistsApi, searchGistsByNameApi } from "../api/gists";
import {
  getConversationsApi,
  addConversationApi,
  deleteConversationApi,
} from "../api/conversations";
import {
  getMessagesApi,
  sendMessageApi,
  deleteMessageApi,
} from "../api/messages";
import {
  getSessionApi,
  getSubmitApi,
  addInfoToSessionApi,
  setSubmitApi,
} from "../api/profile";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { sessionReducer } from "./session";
import {
  logger,
  botSendMessage,
  timeScheduler,
  crashReporter,
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["messages", "conversations"],
  whitelist: ["profile", "messages", "conversations"],
};
export const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationReducer,
  messages: messagesReducer,
  gists: gistsReducer,
  session: sessionReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      crashReporter,
      timeScheduler,
      botSendMessage,
      logger,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByNameApi,
        getConversationsApi,
        addConversationApi,
        getMessagesApi,
        sendMessageApi,
        deleteMessageApi,
        getSessionApi,
        addInfoToSessionApi,
        setSubmitApi,
        getSubmitApi,
        deleteConversationApi,
      })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);
export const persistor = persistStore(store);
