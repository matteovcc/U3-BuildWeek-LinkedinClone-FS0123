import { POST_POSTS } from "../actions";

const initialState = {
  content: null
};

const createPost = (state = initialState, action) => {
  switch (action.type) {
    case POST_POSTS:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default createPost;
