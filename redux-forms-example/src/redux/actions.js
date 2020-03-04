const actionTypes = {
    ACTION1: 'ACTION1',
    ACTION2: 'ACTION2'
};

const actionHandlers = {
    action1: (state, action) => {
        return { ...state };
    },
    action2: (state, action) => {
        return { ...state };
    }
};

export const actionCreators = {
    creator1: argument => {
        return {
            type: actionTypes.ACTION1,
            fn: actionHandlers.action1
        };
    },
    creator2: argument => {
        return {
            type: actionTypes.ACTION2,
            fn: actionHandlers.action2
        };
    }
};