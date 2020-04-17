import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// custom reducers
import { reducer as fossilReducer } from "./fossil";
import { reducer as userReducer } from "./user";

const reducers = combineReducers({
    fossil: fossilReducer,
    user: userReducer
});

export const getStore = () => {
    return createStore(reducers, devToolsEnhancer());
};
