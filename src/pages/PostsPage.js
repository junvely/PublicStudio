import { getPostsAxios } from "../axios/api";
import React, { useEffect } from "react";
import Post from "redux/components/Post";
import Footer from "redux/components/common/Footer";
import { StPostsCon } from "styles/Components";
import { StPositionSec } from "styles/GlobalStyles";
import { fetchPosts } from "redux/modules/postsSlice";
import { useDispatch, useSelector } from "react-redux";

function PostsPage() {
  const dispatch = useDispatch();

  // 서버의 posts 데이터를 reducer에 fetch하는 함수
  const getPostsData = async () => {
    const { data } = await getPostsAxios();
    dispatch(fetchPosts(data)); // 서버데이터 posts reducer에 패치
  };

  const posts = useSelector((state) => state.postsSlice.posts);

  useEffect(() => {
    getPostsData();
  }, [dispatch]);

  return (
    <div>
      <StPositionSec>
        <StPostsCon>
          {posts.map((post) => {
            return <Post key={post.id} post={post} isActive={true}></Post>;
          })}
        </StPostsCon>
      </StPositionSec>
      <Footer isActive={true}></Footer>
    </div>
  );
}

export default PostsPage;
