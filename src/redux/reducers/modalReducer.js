const initialState = {
  content: [],
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};
export default modalReducer;
