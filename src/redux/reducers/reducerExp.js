import { ADD_EXPERIENCE } from "../actions";
const initialState = {
  experiences: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE: {
      return {
        ...state,
        experiences: action.payload,
      };
    }

    default:
      return state;
  }
};

export default experienceReducer;
