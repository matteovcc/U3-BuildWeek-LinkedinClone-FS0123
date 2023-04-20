import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";
import modalReducer from "../reducers/modalReducer";
import allPosts from "../reducers/allPosts";
import createPost from "../reducers/createPost";

// const persistConfiguration = {
//   key: "root",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_SECRET_KEY,
//     }),
//   ],
// };
const rootReducer = combineReducers({
  modal: modalReducer,
  allPosts: allPosts,
  createPost: createPost
});

// const persistedReducer = persistReducer(persistConfiguration, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);

const store = configureStore({
  reducer: rootReducer
});

export default store;
