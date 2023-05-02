import { getPostAxios } from "../axios/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AirBox from "redux/components/common/AirBox";
import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import Post from "redux/components/Post";
import { setPost } from "redux/modules/postSlice";
import { StButtonCon, StModifyCon } from "styles/Components";
import {
  ErrorMessage,
  StDetailCon,
  StFlexCenter,
  StFlexCon,
  StPositionSec,
} from "styles/GlobalStyles";
import ModifyPost from "redux/components/ModifyPost";

function DetailPage() {
  const [modalToggle, setModalToggle] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  // param.id로 서버에서 post가져와서 post reducer에 저장
  const getPostData = async () => {
    const data = await getPostAxios(id);
    dispatch(setPost(data)); //post reducer에 저장
  };

  // reducer에 저장된 post 가져오기
  const post = useSelector((state) => state.postSlice.post);

  useEffect(() => {
    getPostData();
  }, [dispatch, id]);

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
              <ModifyPost modalToggle={onClickModifyButton}></ModifyPost>
            )}
          </StPositionSec>
          <Footer />
        </>
      )}
    </>
  );
}

export default DetailPage;
