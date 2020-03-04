import getMatryx from "../lib/matryx/createMatryx";

const initialState = {
  records: [
    { name: "fossil1", location: "home" },
    { name: "fossil2", location: "park" }
  ]
};

// fossils action handlers
const handlers = {
  delete: (state, action) => {
    return {
      ...state,
      records: state.records.filter(r => r.name !== action.name)
    };
  },
  rename: (state, action) => {
    return {
      ...state,
      records: state.records.map(r =>
        r.name === action.oldName ? { ...r, name: action.newName } : r
      )
    };
  }
};

// fossils action creators
const matryx = getMatryx(initialState, "fossils");
matryx.addAction("DELETE", handlers.delete, "rdxDelete", name => ({
  name: name
}));
matryx.addAction(
  "RENAME",
  handlers.rename,
  "rdxRename",
  (oldName, newName) => ({ oldName: oldName, newName: newName })
);

export default matryx;
