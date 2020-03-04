import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

export const getStore = () => { return createStore(rootReducer, devToolsEnhancer()) }