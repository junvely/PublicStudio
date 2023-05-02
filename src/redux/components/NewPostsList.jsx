import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StNewPostList, StNewPostsCon } from "styles/Components";
import { StFlexCon } from "styles/GlobalStyles";

function NewPostsList({ isActive }) {
  const postList = useSelector((state) => state.postsSlice.posts).slice(0, 4);
  // Posts최신순
  const newList = [...postList].reverse().slice(0, 4);

  return (
    <StNewPostsCon>
      {/* News active? */}
      {isActive ? (
        <StFlexCon>
          {postList.map((post) => {
            return (
              <StNewPostList>
                <Link to={`/posts/${post.id}`} key={post.id}>
                  '{post.title}'
                </Link>
              </StNewPostList>
            );
          })}
        </StFlexCon>
      ) : (
        <p> Public Studio에서 당신의 감성을 공유해 보세요. </p>
      )}
    </StNewPostsCon>
  );
}

export default NewPostsList;
