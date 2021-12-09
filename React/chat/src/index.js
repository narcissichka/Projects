import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./theme";
import { ChatPage, HomePage, ProfilePage, Gists } from "./pages";
import { store, persistor } from "./store";
import "./common.module.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="//*" element={<HomePage />} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/profile/*" element={<ProfilePage />} />
              <Route path="/gists" element={<Gists />} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
