import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import {reducer} from './Reducer'

export const getStore = () => {
  return createStore(reducer, devToolsEnhancer());
};
