import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import postReducer from "./reducers/postReducer";
import { ActionType, StateType } from "./components/types/types";

const store: Store<StateType, ActionType> = createStore(
  postReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
