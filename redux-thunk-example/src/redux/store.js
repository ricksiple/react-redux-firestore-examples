import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import asyncReducer from "./asyncReducer";
import profilesReducer from "./profilesReducer";

const rootReducer = combineReducers({
  async: asyncReducer,
  profiles: profilesReducer
});

export const configureStore = () => {
  const middlewares = [thunk];
  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer, composedEnhancer);
};
