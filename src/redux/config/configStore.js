import postSlice from "redux/modules/postSlice";
import postsSlice from "redux/modules/postsSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { postsSlice, postSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
