import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducers";
import middleware from "./middleware";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles.css";

const store = createStore(reducer, middleware);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
