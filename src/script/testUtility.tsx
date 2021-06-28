import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { main_reducer } from "../redux/store";

function renderWithRedux(
  ui: React.ReactElement,
  {
    initialState = {},
    store = createStore(main_reducer, {}),
    ...renderOptions
  } = {}
) {
  return rtlRender(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...renderOptions,
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRedux };
