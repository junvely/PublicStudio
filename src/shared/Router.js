import FormPage from "pages/FormPage";
import IntroPage from "pages/IntroPage";
import MainPage from "pages/MainPage";
import PostPage from "pages/PostPage";
import PostsPage from "pages/PostsPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "redux/components/common/Header";
import { StLayout } from "styles/Components";
import { StFlexWrap, StSection } from "styles/GlobalStyles";
import { Colors } from "styles/Them";

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
                <Route path="/posts/:id" element={<PostPage />}></Route>
                <Route path="/form" element={<FormPage />}></Route>
              </Routes>
            </StSection>
          </StLayout>
        </StFlexWrap>
      </BrowserRouter>
    </>
  );
}

export default Router;
