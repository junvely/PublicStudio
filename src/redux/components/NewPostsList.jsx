import { getPostsAxios } from "../../axios/api";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { StNewPostList, StNewPostsCon } from "styles/Components";
import { StFlexCon } from "styles/GlobalStyles";

function NewPostsList({ isActive }) {
  const { data } = useQuery("posts", getPostsAxios);
  const postList = data.slice(0, 4);
  // Posts최신순
  const newList = [...postList].reverse().slice(0, 4);

  return (
    <StNewPostsCon>
      {/* News active? */}
      {isActive ? (
        <StFlexCon>
          {postList.map((post) => {
            return (
              <StNewPostList key={post.id}>
                <Link to={`/posts/${post.id}`}>'{post.title}'</Link>
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
