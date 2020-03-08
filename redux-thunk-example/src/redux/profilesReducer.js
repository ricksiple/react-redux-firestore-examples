import { actions as asyncActions } from "./asyncReducer";

const initialState = {
  profiles: []
};

const profileIds = [{ id: "picard001" }, { id: "riker001" }, { id: "data001" }];

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

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

const types = {
  GET_PROFILES: "GET_PROFILES",
  GET_PROFILE: "GET_PROFILE"
};

export const actions = {
  getProfiles: () => ({ type: types.GET_PROFILES }),

  getProfile: id => ({ type: types.GET_PROFILE, id: id }),

  getProfilesAsync: () => {
    return async dispatch => {
      // dispatch(asyncActions.asyncActionStart());
      // await delay(2000);
      dispatch(actions.getProfiles());
      // dispatch(asyncActions.asyncActionFinish());
    };
  },

  getProfileAsync: (id) => {
    console.log(`getProfileAsync(${id})`);
    return async dispatch => {
      // dispatch(asyncActions.asyncActionStart());
      // await delay(Math.random() * 5000);
      dispatch(actions.getProfile(id));
      // dispatch(asyncActions.asyncActionFinish());
    };
  }
};

const handlers = {
  getProfiles: (state, action) => {
    const newState = { ...state, profiles: [...profileIds] };
    return newState;
  },

  getProfile: (state, action) => {
    const newProfile = profiles.find(profile => (profile.id = action.id));
    const newProfiles = profiles.map(profile =>
      profile.id === action.id ? newProfile : profile
    );
    return { ...state, profiles: newProfiles };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILES:
      return handlers.getProfiles(state, action);
    case types.GET_PROFILE:
      return handlers.getProfile(state, action);
    default:
      return state;
  }
};

export default reducer;
