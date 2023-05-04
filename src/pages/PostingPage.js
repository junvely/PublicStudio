import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import { StButtonCon, StModifyCon } from "styles/Components";
import { StDetailCon, StFlexCenter, StPositionSec } from "styles/GlobalStyles";
import { addPostsAxios } from "../api/api";
import { useInputs } from "redux/hooks/useInputs";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";

function PostingPage() {
  let today = new Date();
  const initialState = {
    id: uuidv4(),
    userName: "",
    title: "",
    contents: "",
    imgURL: "",
    date: today.toLocaleDateString(),
  };

  // custom Hook
  const [post, handleInputChange, resetPost] = useInputs(initialState);
  const queryClient = useQueryClient();
  const mutation = useMutation(addPostsAxios, {
    onSuccess: () => {
      alert("포스팅 성공!");
      resetPost();
      queryClient.invalidateQueries("posts");
    },
    onError: () => {
      alert("Error : 서버 에러 발생");
    },
  });

  // 폼 유효성 검사
  const formValidation = () => {
    if (!post.title || !post.contents || !post.imgURL) {
      alert("입력란을 모두 작성해 주세요!");
      return false;
    }
    return true;
  };

  const handleSubmitAddPost = async () => {
    if (formValidation()) {
      mutation.mutate(post); //서버에 추가 요청
    }
  };
  return (
    <>
      <StPositionSec>
        <StFlexCenter>
          <StDetailCon>
            <StModifyCon>
              <div>
                <span> User Name : </span>
                <input
                  name="userName"
                  value={post.userName}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div>
                <span> Image URL : </span>
                <input
                  name="imgURL"
                  value={post.imgURL}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div>
                <span> Title : </span>
                <input
                  name="title"
                  value={post.title}
                  onChange={handleInputChange}
                ></input>
              </div>
              <span> Contents : </span>
              <div>
                <textarea
                  cols="50"
                  rows="3"
                  name="contents"
                  value={post.contents}
                  onChange={handleInputChange}
                  placeholder="내용을 입력해 주세요."
                ></textarea>
              </div>
            </StModifyCon>
            <StButtonCon>
              <Button width="40%" onClick={handleSubmitAddPost}>
                Posting
              </Button>
            </StButtonCon>
          </StDetailCon>
        </StFlexCenter>
      </StPositionSec>
      <Footer isActive={true}></Footer>
    </>
  );
}

export default PostingPage;
