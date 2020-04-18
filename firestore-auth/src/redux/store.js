import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// firebase/firestore
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// custom reducers
import { reducer as fossilReducer } from "./fossil";
import { reducer as userReducer } from "./user";

const reducers = combineReducers({
    fossil: fossilReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export const getStore = () => {
    return createStore(reducers, devToolsEnhancer());
};
