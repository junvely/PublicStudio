import { getPostAxios } from "../axios/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AirBox from "redux/components/common/AirBox";
import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import Modal from "redux/components/Modal";
import Post from "redux/components/Post";
import { StButtonCon, StModifyCon } from "styles/Components";
import {
  ErrorMessage,
  StDetailCon,
  StFlexCenter,
  StFlexCon,
  StPositionSec,
} from "styles/GlobalStyles";

function PostPage() {
  const [modalToggle, setModalToggle] = useState(false);
  const [post, setPost] = useState();

  // param.id로 post가져오기
  const { id } = useParams();
  const getPostData = async () => {
    const data = await getPostAxios(id);
    setPost(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const onClickModifyButton = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      {/* url경로를 직접 입력시 일치하는 post 정보가 없을 경우 보여주는 문구 */}
      {!post ? (
        <StFlexCenter>
          <ErrorMessage>❗페이지 정보가 없습니다.</ErrorMessage>
        </StFlexCenter>
      ) : (
        <>
          <StPositionSec position={true}>
            <StFlexCon padding="1% 0 1% 15%">
              {/* Post 가져오기*/}
              <Post post={post} width="30%" />
              <AirBox width="50px" />
              {/* 게시글 내용 */}
              <StDetailCon height="430px">
                <StModifyCon>
                  <div>
                    <span> Title : </span>
                    <p>{post.title}</p>
                  </div>
                  <div>
                    <span>Contents :</span>
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
      )}
    </>
  );
}

export default PostPage;
