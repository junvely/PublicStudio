import postSlice from "redux/modules/postSlice";
import postsSlice from "redux/modules/postsSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { postsSlice, postSlice },
});

export default store;
