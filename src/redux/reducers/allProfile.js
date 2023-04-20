import { ALL_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const allProfile = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default allProfile;
