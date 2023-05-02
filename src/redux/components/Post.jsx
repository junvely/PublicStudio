import { deletePostAxios } from "../../axios/api";
import { useNavigate } from "react-router-dom";
import { StDelete, StPost, StPostTitle } from "styles/Components";
import { useMutation, useQueryClient } from "react-query";

// post reducer에 값이 들어오기 전에 posts 컴포넌트에서 사용되기 때문에 props으로 전달받는다.
function Post({ post, width, isActive }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(deletePostAxios, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
    onError: () => {
      alert("Error : 서버 에러 발생");
    },
  });
  const handleClickDeletePost = async (id) => {
    mutation.mutate(id);
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
