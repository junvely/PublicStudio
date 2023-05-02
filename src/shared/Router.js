import IntroPage from "pages/IntroPage";
import MainPage from "pages/MainPage";
import PostsPage from "pages/PostsPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "redux/components/Header";
import { StLayout } from "styles/Components";
import { StFlexWrap, StSection } from "styles/GlobalStyles";
import { Colors } from "styles/Them";
import DetailPage from "pages/DetailPage";
import PostingPage from "pages/PostingPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <StFlexWrap bgColor={Colors.lightBlue}>
          <StLayout>
            <Header></Header>
            <StSection>
              <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/intro" element={<IntroPage />}></Route>
                <Route path="/posts" element={<PostsPage />}></Route>
                <Route path="/posts/:id" element={<DetailPage />}></Route>
                <Route path="/form" element={<PostingPage />}></Route>
              </Routes>
            </StSection>
          </StLayout>
        </StFlexWrap>
      </BrowserRouter>
    </>
  );
}

export default Router;
