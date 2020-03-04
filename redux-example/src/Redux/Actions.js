import cuid from "cuid";

// action types
// even with the fn() property, these are still needed for time-travel debugging
export const actionTypes = {
  DELETE: "PERF_SUMMARY_DELETE",
  UPDATE: "PERF_SUMMARY_UPDATE",
  INSERT: "PERF_SUMMARY_INSERT",
  CREATE: "PERF_SUMMARY_CREATE"
};

// actions
const actionHandlers = {
  deleteAction: (state, args) => {
    const { id } = args;
    const newRows = state.rows.filter(row => row.id !== id);
    return Object.assign({}, state, { rows: newRows });
  },

  updateAction: (state, args) => {
    const { row } = args;
    const { id } = row;
    row._new = false;

    const newRows = state.rows.map(r => {
      return r.id === id ? row : r;
    });
    return { ...state, rows: newRows };
  },

  insertAction: (state, args) => {
    const { row } = args;
    row.id = cuid();
    const newRows = [...state.rows, row];
    return { ...state, rows: newRows };
  },

  createAction: (state, args) => {
    
    const row =     {
      id: cuid(),
      portfolio: "",
      assets: 0,
      mtd: 0,
      qtd: 0,
      ytd: 0,
      _new: true
    }

    const newRows = [...state.rows, row]
    return {...state, rows: newRows}

  }
};

// action creators

const actionCreators = {
  rdxDelete: id => {
    return {
      type: actionTypes.DELETE,
      args: { id },
      fn: actionHandlers.deleteAction
    };
  },

  rdxUpdate: row => {
    return {
      type: actionTypes.UPDATE,
      args: { row },
      fn: actionHandlers.updateAction
    };
  },

  rdxInsert: row => {
    return {
      type: actionTypes.INSERT,
      args: { row },
      fn: actionHandlers.insertAction
    };
  },
  
  rdxCreate: () => {
    return {
      type: actionTypes.CREATE,
      args: { },
      fn: actionHandlers.createAction
    };
  }

};

export default actionCreators;
