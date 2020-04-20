import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createStore, combineReducers } from "redux";
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { devToolsEnhancer } from "redux-devtools-extension";

import Fossil from "./Fossil";

const firebaseConfig = {
    apiKey: "AIzaSyDVQJvIa00GzdnTdTAPuxXXV_MGyF8qfo8",
    authDomain: "firestore-example-50a9c.firebaseapp.com",
    databaseURL: "https://firestore-example-50a9c.firebaseio.com",
    projectId: "firestore-example-50a9c",
    storageBucket: "firestore-example-50a9c.appspot.com",
    messagingSenderId: "909230457167",
    appId: "1:909230457167:web:8ae1a26e64bab70dcf453a",
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const store = createStore(rootReducer, devToolsEnhancer());

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
};

// Setup react-redux so that connect HOC can be used
function App() {
    return (<Fragment><Fossil /></Fragment>);
}

render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);
