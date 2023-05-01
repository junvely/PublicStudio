import React, { useState } from "react";
import { StButtonCon, StClose, StModifyCon, StoutCon } from "styles/Components";
import { StDetailCon } from "styles/GlobalStyles";
import Button from "./common/Button";

function Modal({ post, modalToggle }) {
  const [contents, setContents] = useState(post.contents);

  const onSaveButtonClickHandler = () => {
    modalToggle();
    // 수정 로직
    alert("수정되었습니다!");
  };

  return (
    <>
      <StoutCon>
        <StDetailCon>
          <StClose onClick={modalToggle}>X</StClose>
          <StModifyCon>
            <div>
              <span> Title : </span>
              <p>{post.title}</p>
            </div>
            <span> Contents : </span>
            <div>
              {/* 포스팅 내용 입력란 */}
              <textarea
                cols="50"
                rows="5"
                value={contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
                placeholder="수정할 내용을 입력해 주세요."
              ></textarea>
            </div>
          </StModifyCon>
          <StButtonCon>
            <Button width="40%" onClick={onSaveButtonClickHandler}>
              Save
            </Button>
          </StButtonCon>
        </StDetailCon>
      </StoutCon>
    </>
  );
}

export default Modal;
