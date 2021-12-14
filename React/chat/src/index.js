import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./theme";
import {
  ChatPage,
  HomePage,
  ProfilePage,
  Gists,
  LoginPage,
  SignUpPage,
} from "./pages";
import { store, persistor } from "./store";
import { PublicRoute, PrivateRoute } from "./components";
import { sessionSelector, setSessionFB } from "./store/session";
import "./common.module.css";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  const session = useSelector(sessionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSessionFB());
  }, [dispatch]);

  const isAuth = session?.user?.email ?? null;
  return (
    <PersistGate persistor={persistor}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="//*" element={<HomePage />} />
            <Route
              path="/chat/*"
              element={
                <PrivateRoute isAuth={isAuth} to="/login">
                  <ChatPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/*"
              element={
                <PrivateRoute isAuth={isAuth} to="/login">
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/gists"
              element={
                <PrivateRoute isAuth={isAuth} to="/login">
                  <Gists />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </PersistGate>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
