import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";
// import modalReducer from "../reducers/modalReducer";
// import listExperiences from "../reducers/listExperience";
import allExp from "../reducers/allExp.js";
import reducerExp from "../reducers/reducerExp.js";
import profileReducer from "../reducers/profileReducer.js";
import allProfile from "../reducers/allProfile.js";
import allPosts from "../reducers/allPosts.js";
import createPost from "../reducers/createPost.js";
import postComment from "../reducers/postComment";

const rootReducer = combineReducers({
  reducerExp: reducerExp,
  allExp: allExp,
  profile: profileReducer,
  allProfile: allProfile,
  allPosts: allPosts,
  createPost: createPost,
  postComment: postComment,
});

// const persistedReducer = persistReducer(persistConfiguration, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
