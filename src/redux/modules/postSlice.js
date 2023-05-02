const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  post: {
    id: 0,
    userName: "Master",
    title: "",
    contents: "",
    imgURL: "",
    date: "",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      return {
        ...state,
        post: action.payload,
      };
    },
    updatePost: (state, action) => {
      return {
        ...state,
        post: action.payload,
      };
    },
    clearPost: (state) => {
      return {
        ...state,
        post: initialState,
      };
    },
  },
});

export default postSlice.reducer;
export const { setPost } = postSlice.actions;
