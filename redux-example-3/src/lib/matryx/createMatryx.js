const createReducer = (initialState, key) => {
  const smartFn = (state, action) => {
    return action.fn(state, action);
  };

  const initFn = (state, action) => {
    activeFn = smartFn;
    return state;
  };

  let activeFn = initFn;

  const reducer = (state = initialState, action) => {
    return activeFn(state, action);
  };
  reducer.key = key;

  return reducer;
};

const createMatryx = (initialState, key) => {
  // reducer
  var rdx = createReducer(initialState, key);

  //actions to associated with reducer
  var actions = {};

  // add an action, class will wrap with
  const addAction = (type, handler, actionName, actionFn) => {
    const baseAction = { type: type, fn: handler, rdx: rdx };
    const newFn = (...args) => {
      return { ...baseAction, ...actionFn(...args) };
    };
    actions = { ...actions, [actionName]: newFn };
  };

  // get all actions, for use with connect higher order object
  const getActions = () => {
    return actions;
  };

  const getReducer = () => {
    return rdx;
  };

  return {
    addAction: addAction,
    getActions: getActions,
    getReducer: getReducer
  };
};

export default createMatryx;
