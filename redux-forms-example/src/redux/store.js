import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { reducer as formReducer } from 'redux-form'
import { reducer } from './reducer'

const rootReducer = combineReducers({
    character: reducer,
    form: formReducer
})

const getStore = () => { return createStore(rootReducer, devToolsEnhancer()) }

export default getStore;