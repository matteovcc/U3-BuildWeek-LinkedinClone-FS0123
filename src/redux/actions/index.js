export const ADD_ITEM = "ADD_ITEM";

export const addItem = item => ({ type: "ADD_ITEM", payload: item });

export const GET_POSTS = "GET_POSTS";
export const POST_POSTS = "POST_POSTS";

export const allPosts = () => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg"
        }
      });
      if (response.ok) {
        const allPosts = await response.json();
        dispatch({ type: GET_POSTS, payload: allPosts });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = content => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg",
          "Content-type": "application/json"
        },
        body: JSON.stringify({ text: content })
      });
      if (response.ok) {
        const newPost = await response.json();
        dispatch({ type: POST_POSTS, payload: newPost });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
