import React, { useState } from "react";
import AirBox from "redux/components/common/AirBox";
import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import Modal from "redux/components/Modal";
import Post from "redux/components/Post";
import { StButtonCon, StClose, StModifyCon } from "styles/Components";
import { StDetailCon, StFlexCon, StPositionSec } from "styles/GlobalStyles";

function PostPage() {
  const [modalToggle, setModalToggle] = useState(false);

  const onClickModifyButton = () => {
    setModalToggle(!modalToggle);
  };

  // param id로 todo 찾아오기
  const post = {
    id: 6,
    title: "test입니다.",
    contents: "test입니다다다다다다다다.",
    userName: "ID123",
    imgURL: "./img/camera.jpg",
  };
  return (
    <>
      <StPositionSec position={true}>
        <StFlexCon padding=" 1% 0 1% 15%">
          {/* Post 가져오기*/}
          <Post post={post} width="30%" />
          {/* 게시글 내용 */}
          <AirBox width="50px" />
          <StDetailCon height="430px">
            <StModifyCon>
              <div>
                <span> Title : </span>
                <p>{post.title}</p>
              </div>
              <div>
                <span> Contents : </span>
                <p>{post.contents}</p>
              </div>
            </StModifyCon>
            {/* Modify버튼 */}
            <StButtonCon>
              <Button width="40%" onClick={onClickModifyButton}>
                Modify
              </Button>
            </StButtonCon>
          </StDetailCon>
        </StFlexCon>
        {/* Modal */}
        {modalToggle && (
          <Modal post={post} modalToggle={onClickModifyButton}></Modal>
        )}
      </StPositionSec>
      <Footer />
    </>
  );
}

export default PostPage;
