import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// custom reducers
// import { reducer1 } from "module1";
// import { reducer2 } from "module2";

const rootReducer = combineReducers({
  //label1: reducer1,
  //label2: reduder2
});

export const getStore = () => {
  return createStore(root, devToolsEnhancer());
};