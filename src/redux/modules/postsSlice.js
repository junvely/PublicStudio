const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      return {
        ...state,
        posts: [...action.payload],
      };
    },
    addPost: (state, action) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    deletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    },
    updatePost: (state, action) => {
      return;
    },
  },
});

export default postsSlice.reducer;
export const { fetchPosts, addPost, deletePost, updatePost } =
  postsSlice.actions;
