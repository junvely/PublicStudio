import { useState } from "react";

export const usePost = (initialState) => {
  const [post, setPost] = useState(initialState);

  const handler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const reset = () => {
    setPost(initialState);
  };

  return [post, handler, reset];
};
