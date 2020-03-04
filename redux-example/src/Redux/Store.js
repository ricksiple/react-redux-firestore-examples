import { createStore } from "redux";
import { perfSummaryReducer } from "./Reducers";
import { devToolsEnhancer } from 'redux-devtools-extension'

export const getStore = ()  => { return createStore(perfSummaryReducer, devToolsEnhancer()) };