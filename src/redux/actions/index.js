export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";

export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const ALL_EXPERIENCES = "ALL_EXPERIENCES";
// export const addExperience = (experiences) => ({
//   type: ADD_EXPERIENCE,
//   payload: experiences,
// });

export const GET_POSTS = "GET_POSTS";
export const POST_POSTS = "POST_POSTS";

export const myProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProfiles = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ALL_PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperiencesAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/643d22fc22a6ab00141a856f/experiences`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg`,
          },
        }
      );
      if (response.ok) {
        const allExperiences = await response.json();
        dispatch({ type: ALL_EXPERIENCES, payload: allExperiences });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const newExperiencesAction = (
  role,
  area,
  startDate,
  endDate,
  description,
  company
) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/643d22fc22a6ab00141a856f/experiences`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            role,
            area,
            startDate,
            endDate,
            description,
            company
          ),
        }
      );
      if (response.ok) {
        const experiences = await response.json();
        dispatch({ type: ADD_EXPERIENCE, payload: experiences });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg`,
          },
        }
      );
      if (response.ok) {
        const allPosts = await response.json();
        dispatch({ type: GET_POSTS, payload: allPosts });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (content) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({ text: content }),
        }
      );
      if (response.ok) {
        const newPost = await response.json();
        dispatch({ type: POST_POSTS, payload: newPost });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
