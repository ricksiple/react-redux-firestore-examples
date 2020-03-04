// redux
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

// redux-form
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
})

export const getStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
