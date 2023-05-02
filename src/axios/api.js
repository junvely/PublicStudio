import axios from "axios";
// test
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const getPostsAxios = async () => {
  try {
    return await Axios.get("/posts");
  } catch (error) {
    console.log("axios getPosts Error :", error);
    throw error;
  }
};

export const getPostAxios = async (id) => {
  try {
    const { data } = await Axios.get("/posts");
    const post = data.find((post) => post.id == id);
    return post;
  } catch (error) {
    console.log("axios getPost Error :", error);
    throw error;
  }
};

export const addPostsAxios = async (post) => {
  try {
    await Axios.post("/posts", post);
  } catch (error) {
    console.log("axios addPosts Error :", error);
    throw error;
  }
};

export const deletePostAxios = async (id) => {
  try {
    await Axios.delete(`/posts/${id}`);
  } catch (error) {
    console.log("axios deletePost Error :", error);
    throw error;
  }
};

export const updatePostAxios = async (id, payload) => {
  try {
    await Axios.patch(`/posts/${id}`, payload);
  } catch (error) {
    console.log("axios getPost Error :", error);
    throw error;
  }
};
