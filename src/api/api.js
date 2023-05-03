import axios from "axios";
// test
const Axios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const getPostsAxios = async () => {
  try {
    const { data } = await Axios.get("/posts");
    return data;
  } catch (error) {
    console.log("axios getPosts Error :");
    throw error;
  }
};

const getPostAxios = async (id) => {
  try {
    const { data } = await Axios.get("/posts");
    const post = data.find((post) => post.id === +id);
    return post;
  } catch (error) {
    console.log("axios getPost Error :");
    throw error;
  }
};

const addPostsAxios = async (post) => {
  try {
    await Axios.post("/posts", post);
  } catch (error) {
    console.log("axios addPost Error :");
    throw error;
  }
};

const deletePostAxios = async (id) => {
  try {
    await Axios.delete(`/posts/${id}`);
  } catch (error) {
    console.log("axios deletePost Error :");
    throw error;
  }
};

const updatePostAxios = async (payload) => {
  try {
    await Axios.patch(`/posts/${payload.id}`, payload);
  } catch (error) {
    console.log("axios updatePost Error :");
    throw error;
  }
};

export {
  getPostsAxios,
  getPostAxios,
  addPostsAxios,
  deletePostAxios,
  updatePostAxios,
};
