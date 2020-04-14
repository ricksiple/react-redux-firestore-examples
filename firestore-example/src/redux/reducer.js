const initialState = {};

const types = {
    CREATE: "SUBJECT_CREATE",
    DELETE: "SUBJECT_DELETE"
};

const handlers = {
    update: (state, action) => {
        const newRecords = state.records.map(r =>
            r.id === action.record.id ? action.record : r
        );
        return { ...state, records: newRecords, selected: null };
    }
};

export const actions = {
    rdxUpdate: record => ({ type: types.UPDATE, record: record })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE:
            return handlers.update(state, action);
        default:
            return state;
    }
};

export default reducer;
