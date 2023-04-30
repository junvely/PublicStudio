import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "redux/components/common/Footer";
import { StMainCon, StMainTitle, StPostsCon } from "styles/Components";
import { StList } from "styles/GlobalStyles";

function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <StMainCon>
        <StMainTitle>What's your choice?</StMainTitle>
        <StPostsCon>
          <StList>
            <li
              onClick={() => {
                navigate("/posts");
              }}
            >
              <p>Studio</p>
            </li>
            <li
              onClick={() => {
                navigate("/form");
              }}
            >
              <p>Posting</p>
            </li>
          </StList>
        </StPostsCon>
      </StMainCon>
      <Footer isActive={false}></Footer>
    </>
  );
}

export default MainPage;
