import React, { useState } from "react";
import Post from "redux/components/Post";
import Footer from "redux/components/common/Footer";
import { StPostsCon } from "styles/Components";
import { StPositionSec } from "styles/GlobalStyles";

function PostsPage() {
  const test = [
    {
      id: 1,
      title: "test입니다.",
      userName: "ID123",
      imgURL: "./img/camera.jpg",
    },
    {
      id: 2,
      title: "test입니다.",
      userName: "ID123",
      imgURL: "./img/camera.jpg",
    },
    {
      id: 3,
      title: "test입니다.",
      userName: "ID123",
      imgURL: "./img/camera.jpg",
    },
    {
      id: 4,
      title: "test입니다.",
      userName: "ID123",
      imgURL: "./img/camera.jpg",
    },
    {
      id: 5,
      title: "test입니다.",
      userName: "ID123",
      imgURL: "./img/camera.jpg",
    },
  ];
  return (
    <div>
      <StPositionSec>
        <StPostsCon>
          {test.map((post) => {
            return <Post key={post.id} post={post}></Post>;
          })}
        </StPostsCon>
      </StPositionSec>
      <Footer isActive={true}></Footer>
    </div>
  );
}

export default PostsPage;
