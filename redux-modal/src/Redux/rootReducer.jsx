import { combineReducers } from "redux";

import { reducer as modalReducer } from "../Modals/ModalReducer";

const rootReducer = combineReducers({
  modals: modalReducer
});

export default rootReducer;
