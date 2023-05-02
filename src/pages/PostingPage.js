import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import { StButtonCon, StModifyCon } from "styles/Components";
import { StDetailCon, StFlexCenter, StPositionSec } from "styles/GlobalStyles";
import { addPostsAxios } from "../axios/api";
import { useDispatch } from "react-redux";
import { addPost } from "redux/modules/postsSlice";
import { usePost } from "redux/hooks/useInput";
import { v4 as uuidv4 } from "uuid";

function PostingPage() {
  const dispatch = useDispatch();

  let today = new Date();

  const initialState = {
    id: uuidv4(),
    userName: "Master",
    title: "",
    contents: "",
    imgURL: "",
    date: today.toLocaleDateString(),
  };

  // usePost custom Hook
  const [post, handleInputChange, resetPost] = usePost(initialState);

  const handleSubmitAddPost = async () => {
    await addPostsAxios(post); // 서버에 추가
    dispatch(addPost(post)); // posts reducer에 추가
    resetPost(); // usePost 초기화
    alert("포스팅 성공!");
  };

  return (
    <>
      <StPositionSec>
        <StFlexCenter>
          <StDetailCon>
            <StModifyCon>
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
                  rows="5"
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
