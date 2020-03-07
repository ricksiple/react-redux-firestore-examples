const initialState = {
  profiles: []
};

const profiles = [
  {
    id: "picard001",
    rank: "Captain",
    firstName: "Jean-Luc",
    lastName: "Picard",
    imageUrl: "picard.png"
  },
  {
    id: "riker001",
    rank: "Commander",
    firstName: "William",
    lastName: "Riker",
    imageUrl: "riker.jpg"
  },
  {
    id: "data001",
    rank: "Lt. Cmdr.",
    firstName: "",
    lastName: "data",
    imageUrl: "data.jpg"
  }
];

const delay = (ms) => ( new Promise((resolve, reject) => setTimeout(ms, resolve))  );

const types = {
  GET_PROFILES: "GET_PROFILES",
  GET_PROFILE: "GET_PROFILE",
  GET_PROFILES_ASYNC: "GET_PROFILES_ASYNC"
};

export const actions = {
  getProfiles: () => ({ type: types.GET_PROFILES }),
  getProfile: id => ({ type: types.GET_PROFILE, id: id }),
  getProfilesAsync: () => ({ type: types.GET_PROFILES_ASYNC })
};

const handlers = {
  getProfiles: (state, action) => {
    console.log(state);
    const newState = { ...state, profiles: [...profiles] };
    console.log(newState);
    return newState;
  },
  getProfile: (state, action) => ({ ...state }),
  getProfilesAsync: (state, action) => {
    console.log("getProfilesAsync")
    return async (dispatch) => {
      // await dispatch(delay(2000));
      dispatch({type:types.GET_PROFILES});
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILES:
      return handlers.getProfiles(state, action);
    case types.GET_PROFILE:
      return handlers.getProfile(state, action);
      case types.GET_PROFILEs_ASYNC:
        return handlers.getProfilesAsync(state, action);
      default:
      return state;
  }
};

export default reducer;
