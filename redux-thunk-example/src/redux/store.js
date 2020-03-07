import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  devToolsEnhancer,
  composeWithDevTools
} from "redux-devtools-extension";

import thunk from "redux-thunk";
import { reducer as asyncReducer } from "../thunk/reducer";

const rootReducer = combineReducers({
  async: asyncReducer
});

export const configureStore = () => {
  const middlewares = [thunk];
  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer, composedEnhancer);
};
