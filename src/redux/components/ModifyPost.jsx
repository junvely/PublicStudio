import {
  StButtonCon,
  StDelete,
  StModifyCon,
  StoutCon,
} from "styles/Components";
import { StDetailCon } from "styles/GlobalStyles";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { usePost } from "redux/hooks/useInput";
import { updatePostAxios } from "../../axios/api";
import { updatePost } from "redux/modules/postSlice";

function ModifyPost({ modalToggle }) {
  const beforePost = useSelector((state) => state.postSlice.post);
  const [newPost, handleInputChange, resetPost] = usePost(beforePost);

  const resetState = {
    id: 0,
    userName: "Master",
    title: "",
    contents: "",
    imgURL: "",
    date: "",
  };

  const dispatch = useDispatch();

  // 서버 데이터 수정
  const updatePostData = async (newPost) => {
    await updatePostAxios(newPost.id, newPost);
  };

  // 폼 유효성 검사
  const formValidation = () => {
    if (!newPost.title || !newPost.contents) {
      alert("입력란을 모두 작성해 주세요!");
      return false;
    }
    return true;
  };

  // 수정된 newPost로 post reducer 수정, 서버에 전송
  const handleClickSaveUpdatePost = () => {
    if (formValidation()) {
      dispatch(updatePost(newPost)); // post reducer 수정
      updatePostData(newPost); // 서버에 수정 요청하는 함수
      resetPost(resetState); // usePost 초기화
      modalToggle(); // toggle 닫기
      alert("수정되었습니다!");
    }
  };

  return (
    <>
      <StoutCon>
        <StDetailCon>
          {/* 닫기 버튼 */}
          <StDelete onClick={modalToggle}>X</StDelete>
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
