import React, { useState } from "react";
import {
  StButtonCon,
  StDelete,
  StModifyCon,
  StoutCon,
} from "styles/Components";
import { StDetailCon } from "styles/GlobalStyles";
import Button from "./common/Button";
import { useSelector } from "react-redux";
import { usePost } from "redux/hooks/useInput";

function ModifyPost({ modalToggle }) {
  const post = useSelector((state) => state.postSlice.post);
  const [updatePost, handleInputChange] = usePost(post);

  const handleClickSaveButton = () => {
    modalToggle();
    // 수정 로직
    alert("수정되었습니다!");
  };

  console.log(updatePost);
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
                value={updatePost.title}
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
                value={updatePost.contents}
                onChange={handleInputChange}
                placeholder="수정할 내용을 입력해 주세요."
              ></textarea>
            </div>
          </StModifyCon>
          <StButtonCon>
            <Button width="40%" onClick={handleClickSaveButton}>
              Save
            </Button>
          </StButtonCon>
        </StDetailCon>
      </StoutCon>
    </>
  );
}

export default ModifyPost;
