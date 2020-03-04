const initialState = {
  records: [
    {
      id: 1,
      name: "Darvan the Mouse",
      player: "Rick Siple",
      race: "human",
      size: "m",
      gender: "m",
      height: {
        feet: 6,
        inches: 0
      },
      weight: 160,
      abilities: {
        strength: 8,
        dexterity: 17,
        constitution: 12,
        intelligence: 13,
        wisdom: 10,
        charisma: 10
      },
      description: "",
      history: ""
    }
  ]
};

const types = {
  UPDATE: "CHARACTER_UPDATE"
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE:
      return handlers.update(state, action);
    default:
      return state;
  }
};

export default reducer;
