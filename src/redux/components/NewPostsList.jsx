import React from "react";
import { Link } from "react-router-dom";
import { StNewPostsCon } from "styles/Components";
import { StFlexCon, StList } from "styles/GlobalStyles";

function NewPostsList({ isActive }) {
  const array = ["list1", "list2", "list3", "list4"];
  return (
    <StNewPostsCon>
      {isActive ? (
        <StFlexCon>
          {array.map((list) => {
            return <Link to="/">{list}</Link>;
          })}
        </StFlexCon>
      ) : (
        <p> ' pulic studio에서 당신의 감성을 공유해 보세요. ' </p>
      )}
    </StNewPostsCon>
  );
}

export default NewPostsList;
