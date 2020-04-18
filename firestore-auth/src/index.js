import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { getStore } from "./redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import { BrowserRouter } from "react-router-dom";

import firebase from "./config/firebase";

const store = getStore();

const rrfConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

const rootEl = document.getElementById("root");

let render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={getStore()}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <App />
                </ReactReduxFirebaseProvider>
            </Provider>
        </BrowserRouter>,
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
