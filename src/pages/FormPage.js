import React, { useState } from "react";
import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import { StButtonCon, StModifyCon } from "styles/Components";
import { StDetailCon, StFlexCenter, StPositionSec } from "styles/GlobalStyles";
import { v4 as uuidv4 } from "uuid";
import { addPostsAxios } from "../axios/api";
import { useDispatch } from "react-redux";
import { addPost } from "redux/modules/postsSlice";

function FormPage() {
  let today = new Date();
  const initialPost = {
    id: uuidv4(),
    userName: "Master",
    title: "",
    contents: "",
    imgURL: "",
    date: today.toLocaleDateString(),
  };

  const [post, setPost] = useState(initialPost);

  const dispatch = useDispatch();

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmitAddPost = async () => {
    await addPostsAxios(post);
    dispatch(addPost(post));
    setPost(initialPost);
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
                  onChange={handleChangeInputValue}
                ></input>
              </div>
              <div>
                <span> Title : </span>
                <input
                  name="title"
                  value={post.title}
                  onChange={handleChangeInputValue}
                ></input>
              </div>
              <span> Contents : </span>
              <div>
                <textarea
                  cols="50"
                  rows="5"
                  name="contents"
                  value={post.contents}
                  onChange={handleChangeInputValue}
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

export default FormPage;
