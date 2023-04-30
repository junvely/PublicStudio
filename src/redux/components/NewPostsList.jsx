import React from "react";
import { StNewPostsCon } from "styles/Components";
import { StList } from "styles/GlobalStyles";

function NewPostsList({ isActive }) {
  const array = ["list1", "list2", "list3", "list4"];
  return (
    <StNewPostsCon>
      {isActive ? (
        <StList>
          {array.map((list) => {
            return <li>{list}</li>;
          })}
        </StList>
      ) : (
        <p> ' pulic studio에서 당신의 감성을 공유해 보세요. ' </p>
      )}
    </StNewPostsCon>
  );
}

export default NewPostsList;
