import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

import { getStore } from "./Redux/Store";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={getStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
