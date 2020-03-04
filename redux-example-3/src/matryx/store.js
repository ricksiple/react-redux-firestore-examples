import createStore from "../lib/matryx/createStore";
import { devToolsEnhancer } from "redux-devtools-extension";

import fossilMatryx from "./fossilsMatryx";
import authMatryx from "./authMatryx";

export const getStore = () => {
  return createStore([fossilMatryx, authMatryx], devToolsEnhancer());
};
