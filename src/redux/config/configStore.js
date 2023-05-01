import postsSlice from "redux/modules/postsSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { postsSlice: postsSlice },
});

export default store;
