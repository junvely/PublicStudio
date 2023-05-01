import React from "react";
import { useNavigate } from "react-router-dom";
import { StPost, StPostTitle } from "styles/Components";

function Post({ post, width }) {
  const navigate = useNavigate();
  return (
    <StPost
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
      width={width}
    >
      <img src={post.imgURL} alt="poto"></img>
      <StPostTitle>
        <h3>{post.title}</h3>
        <p>{post.userName}</p>
      </StPostTitle>
    </StPost>
  );
}

export default Post;
