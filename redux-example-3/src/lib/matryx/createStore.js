import { createStore } from "redux";

const mergeReducers = reducers => {
  const smartFn = (state, action) => {
    const nextState = { ...state };
    nextState[action.rdx.key] = action.rdx(state[action.rdx.key], action);
    return nextState;
  };

  const initFn = (state, action) => {
    activeFn = smartFn;
    const nextState = { ...state };
    reducers.forEach(rdx => {
      nextState[rdx.key] = rdx(undefined, action);
    });
    return nextState;
  };

  let activeFn = initFn;

  return (state = {}, action) => {
    return activeFn(state, action);
  };
};

const createMatryxStore = (matryces, preloadState, enhancers) => {
  const reducer = mergeReducers(matryces.map(mtx => mtx.getReducer()));
  return createStore(reducer, preloadState, enhancers);
};

export default createMatryxStore;
