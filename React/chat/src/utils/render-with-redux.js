import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "../store";
import { CustomThemeProvider } from "../theme";
export function renderWithRedux(component, initialState) {
  const store = createStore(rootReducer, initialState);

  return {
    store,
    ...render(
      <CustomThemeProvider>
        <Provider store={store}>
          <BrowserRouter>{component}</BrowserRouter>
        </Provider>
      </CustomThemeProvider>
    ),
  };
}
