// redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// redux-thunk
import thunk from "redux-thunk";

// react-redux-firebase
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer,
} from "react-redux-firebase";
import {
  reduxFirestore,
  getFirestore,
  firestoreReducer,
} from "redux-firestore";

// firebase configuration
import firebase from "../config/firebase";

// custom reducers
import fossilReducer from "./fossil";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
};

const rootReducer = combineReducers({
  fossil: fossilReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const getStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  return createStore(rootReducer, composedEnhancer);
};

export default getStore;
