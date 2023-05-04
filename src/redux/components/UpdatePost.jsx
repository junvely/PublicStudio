import {
  StButtonCon,
  StDelete,
  StModifyCon,
  StoutCon,
} from "styles/Components";
import { ErrorMessage, StDetailCon, StFlexCenter } from "styles/GlobalStyles";
import Button from "./common/Button";
import { useInputs } from "redux/hooks/useInputs";
import { getPostAxios, updatePostAxios } from "../../api/posts";
import { useMutation, useQuery, useQueryClient } from "react-query";

function UpdatePost({ id, modalToggle }) {
  const { isLoading, isError, data } = useQuery(`/posts/post:${id}`, () =>
    getPostAxios(id)
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(updatePostAxios, {
    onSuccess: () => {
      resetPost(resetState); // useInputs 초기화
      modalToggle(); // toggle 닫기
      alert("수정 성공!");
      queryClient.invalidateQueries("post");
    },
    onError: () => {
      alert("Error : 서버 에러 발생");
    },
  });

  const [newPost, handleInputChange, resetPost] = useInputs(data);

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

  //서버에 수정 요청
  const handleClickSaveUpdatePost = () => {
    if (formValidation()) {
      mutation.mutate(newPost);
    }
  };

  return (
    <>
      <StoutCon>
        <StDetailCon>
          {data ? (
            <>
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
            </>
          ) : (
            // 에러 페이지 처리
            (isLoading || isError) && (
              <StFlexCenter>
                <ErrorMessage>
                  {isLoading
                    ? "🔵 Loading . . ."
                    : "❗Error : 서버 Error발생으로 인하여 데이터를 가져올 수 없습니다."}
                </ErrorMessage>
              </StFlexCenter>
            )
          )}
        </StDetailCon>
      </StoutCon>
    </>
  );
}

export default UpdatePost;
