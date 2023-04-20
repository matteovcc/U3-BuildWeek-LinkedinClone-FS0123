import { ALL_EXPERIENCES } from "../actions";

const initialState = {
  content: [],
};

const AllExp = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default AllExp;
