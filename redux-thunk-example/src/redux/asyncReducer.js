const initialState = {
    loading: false
}

const types = {
  ASYNC_ACTION_START: "ASYNC_ACTION_START",
  ASYNC_ACTION_FINISH: "ASYNC_ACTION_FINISH",
  ASYNC_ACTION_ERROR: "ASYNC_ACTION_ERROR"
};

export const actions = {
    asyncActionStart: () => ( {type: types.ASYNC_ACTION_START} ),
    asyncActionFinish: () => ( { type: types.ASYNC_ACTION_FINISH} ),
    asyncActionError: () => ( { type: types.ASYNC_ACTION_ERROR} )
}

const handlers = {
    asyncActionStarted: (state) => ( {...state, loading: true} ),
    asyncActionFinished: (state) => ( {...state, loading: false} ),
    asyncActionError: (state) => ( {...state, loading: false} )
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ASYNC_ACTION_START:
            return handlers.asyncActionStarted(state)
        case types.ASYNC_ACTION_FINISH:
            return handlers.asyncActionFinished(state)
        case types.ASYNC_ACTION_ERROR:
            return handlers.asyncActionError(state)
        default:
            return state
    }
}

export default reducer;