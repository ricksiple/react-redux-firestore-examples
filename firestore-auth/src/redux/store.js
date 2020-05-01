import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// firebase/firestore
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// redux form
import { reducer as formReducer } from 'redux-form';

// app
import authReducer from '../redux/auth';

const reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
    auth: authReducer
});

export const getStore = () => {
    return createStore(reducers, devToolsEnhancer());
};
