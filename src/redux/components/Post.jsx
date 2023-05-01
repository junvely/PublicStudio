import { deletePostAxios } from "../../axios/api";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StClose, StPost, StPostTitle } from "styles/Components";
import { deletePost } from "redux/modules/postsSlice";

function Post({ post, width, isActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickdeletePost = async (id) => {
    await deletePostAxios(id);
    dispatch(deletePost(id));
  };

  return (
    <StPost
      onClick={() => {
        isActive && navigate(`/posts/${post.id}`);
      }}
      width={width}
    >
      {isActive && (
        <StClose
          onClick={(e) => {
            e.stopPropagation();
            onClickdeletePost(post.id);
          }}
        >
          X
        </StClose>
      )}
      <img src={post.imgURL} alt="poto"></img>
      <StPostTitle>
        <h3>{post.title}</h3>
        <p>{post.userName}</p>
      </StPostTitle>
    </StPost>
  );
}

export default Post;
