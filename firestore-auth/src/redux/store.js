import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// custom reducers
import { reducer as fossilReducer } from "./fossil";

const reducers = combineReducers({
    fossil: fossilReducer
});

export const getStore = () => {
    return createStore(reducers, devToolsEnhancer());
};
