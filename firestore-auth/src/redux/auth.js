const initialState = {
    firestore: { user: {} }
};

const types = {
    AUTH_CHANGE: "FIRESTORE_AUTH_CHANGE"
};

const handlers = {
    authChange: (state, action) => {
        return { ...state, firestore: { user: action.user } };
    }
};

export const actions = {
    authChange: (user)  => {
        console.log("authChange");
        return { type: types.AUTH_CHANGE, user: user };
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_CHANGE:
            return handlers.authChange(state, action);
        default:
            return state;
    }
};

export default reducer;