const initialState = {
    records: [
        {
            id: 1,
            name: "Heather Siple",
            occupation: "Redux Naturalist"
        },
        {
            id: 2,
            name: "Peter Parker",
            occupation: "Redux Photographer"
        },
        {
            id: 3,
            name: "Tony Stark",
            occupation: "Redux Philanthropist"
        }
    ]
};

const types = {
    DELETE: "USER_DELETE"
};

const handlers = {
    delete: (state, action) => {
        const newRecords = state.records.filter(r => r.id !== action.id);
        return { ...state, records: newRecords, selected: null };
    }
};

export const actions = {
    delete: id => ({ type: types.DELETE, id: id })
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE:
            return handlers.delete(state, action);
        default:
            return state;
    }
};
