import { deletePostAxios } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { StDelete, StPost, StPostTitle } from "styles/Components";
import { useMutation, useQueryClient } from "react-query";

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

  // 서버에 삭제 요청
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
        <span>{post.date}</span>
      </StPostTitle>
    </StPost>
  );
}

export default Post;
