import {
  StButtonCon,
  StDelete,
  StModifyCon,
  StoutCon,
} from "styles/Components";
import { StDetailCon } from "styles/GlobalStyles";
import Button from "./common/Button";
import { usePost } from "redux/hooks/useInput";
import { getPostAxios, updatePostAxios } from "../../axios/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

function ModifyPost({ id, modalToggle }) {
  const { isLoading, isError, data } = useQuery(`/posts/post:${id}`, () =>
    getPostAxios(id)
  );
  const [newPost, handleInputChange, resetPost] = usePost(data);

  const resetState = {
    id: 0,
    userName: "Master",
    title: "",
    contents: "",
    imgURL: "",
    date: "",
  };

  // 폼 유효성 검사
  const formValidation = () => {
    if (!newPost.title || !newPost.contents) {
      alert("입력란을 모두 작성해 주세요!");
      return false;
    }
    return true;
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(updatePostAxios, {
    onSuccess: () => {
      resetPost(resetState); // usePost 초기화
      modalToggle(); // toggle 닫기
      alert("수정 성공!");
      queryClient.invalidateQueries("post");
    },
    onError: () => {
      alert("Error : 서버 에러 발생");
    },
  });

  const handleClickSaveUpdatePost = () => {
    if (formValidation()) {
      mutation.mutate(newPost); //서버에 수정 요청
    }
  };

  return (
    <>
      <StoutCon>
        <StDetailCon>
          {/* 닫기 버튼 */}
          <StDelete onClick={modalToggle}>X</StDelete>
          {/* 수정 모달 */}
          <StModifyCon>
            <div>
              <span> Title : </span>
              <input
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
              ></input>
            </div>
            <span> Contents : </span>
            <div>
              {/* 포스팅 내용 입력란 */}
              <textarea
                cols="50"
                rows="5"
                name="contents"
                value={newPost.contents}
                onChange={handleInputChange}
                placeholder="수정할 내용을 입력해 주세요."
              ></textarea>
            </div>
          </StModifyCon>
          <StButtonCon>
            <Button width="40%" onClick={handleClickSaveUpdatePost}>
              Save
            </Button>
          </StButtonCon>
        </StDetailCon>
      </StoutCon>
    </>
  );
}

export default ModifyPost;
