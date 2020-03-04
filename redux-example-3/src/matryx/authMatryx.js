import getMatryx from "../lib/matryx/createMatryx";

const initialState = {
  isAuthenticated: false
};

const handlers = {
  login: (state, action) => {
    return { ...state, isAuthenticated: true };
  },
  logout: (state, action) => {
    return { ...state, isAuthenticated: false };
  }
};

const matryx = getMatryx(initialState, "auth");
matryx.addAction("LOGIN", handlers.login, "rdxLogin", () => ({}));
matryx.addAction("LOGOUT", handlers.logout, "rdxLogout", () => ({}));

export default matryx;
