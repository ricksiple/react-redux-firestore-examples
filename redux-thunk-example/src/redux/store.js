import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
// import rootReducder 
import thunk from 'redux-thunk'

export const configureStore = () => {
    const middlewares = [thunk];
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))
    return createStore(rootReducer, composedEnhancer);
}