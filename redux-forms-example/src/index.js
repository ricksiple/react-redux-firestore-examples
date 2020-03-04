// React
import React from "react";
import ReactDOM from "react-dom";

// Semantic-UI
import "semantic-ui-css/semantic.min.css";

// React-Redux
import { Provider } from "react-redux";

// React-Router
import { BrowserRouter } from "react-router-dom";

// App
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import getStore from "./redux/store";

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
