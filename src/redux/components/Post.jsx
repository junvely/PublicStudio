import { deletePostAxios } from "../../axios/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StDelete, StPost, StPostTitle } from "styles/Components";
import { deletePost } from "redux/modules/postsSlice";

// post reducer에 값이 들어오기 전에 posts 컴포넌트에서 사용되기 때문에 props으로 전달받는다.
function Post({ post, width, isActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickDeletePost = async (id) => {
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
        <StDelete
          onClick={(e) => {
            e.stopPropagation();
            handleClickDeletePost(post.id);
          }}
        >
          X
        </StDelete>
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
