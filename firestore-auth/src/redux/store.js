import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// firebase/firestore
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export const getStore = () => {
    return createStore(reducers, devToolsEnhancer());
};
