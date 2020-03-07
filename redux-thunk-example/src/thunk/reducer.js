const initialState = {
    loading: false
}

const actions = {
  ASYNC_ACTION_START: "ASYNC_ACTION_START",
  ASYNC_ACTION_FINISH: "ASYNC_ACTION_FINISH",
  ASYNC_ACTION_ERROR: "ASYNC_ACTION_ERROR"
};

export const creators = {
    asyncActionStart: () => ( {type: actions.ASYNC_ACTION_START} ),
    asyncActionFinish: () => ( { type: actions.ASYNC_ACTION_FINISH} ),
    asyncActionError: () => ( { type: actions.ASYNC_ACTION_ERROR} )
}

const handlers = {
    asyncActionStarted: (state) => ( {...state, loading: true} ),
    asyncActionFinished: (state) => ( {...state, loading: false} ),
    asyncActionError: (state) => ( {...state, loading: false} )
}

const reducder = (state, action) {
    switch (action.type) {
        case actions.ASYNC_ACTION_START:
            return handlers.asyncActionStarted(state)
        case actions.ASYNC_ACTION_FINISH:
            return handlers.asyncActionFinished(state)
        case actions.ASYNC_ACTION_ERROR:
            return handlers.asyncActionError(state)
        default:
            return state
    }
}