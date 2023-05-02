import styled from "styled-components";
import { Colors, Fonts } from "./Them";

// Pages
// MainPage
export const StMainTitle = styled.div`
  width: 30%;
  text-align: center;
  font-size: 5rem;
  font-weight: 500;
  font-family: ${Fonts.palyFair};
  transition: all 0.3s;

  &:hover {
    transform: translateX(-20px);
  }
`;

export const StPosts = styled.div`
  width: 60%;
  padding: 7% 5% 5% 0;
  position: absolute;
  top: 0;
  right: 0;

  li {
    width: 40%;
    height: 500px;
    margin-left: 10%;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    transition: all 0.3s;
    -webkit-filter: grayscale(100%);
    filter: gray;
    cursor: pointer;

    &:hover {
      transform: translateX(-20px);
      -webkit-filter: grayscale(0);
    }
    p {
      font-size: 2rem;
      line-height: 500px;
      text-align: center;
      font-weight: 400;
      font-family: ${Fonts.roboto};
      color: ${Colors.white};
    }
  }

  li:nth-child(1) {
    background: url("./img/gallery3.jpg") 50% / cover;
  }

  li:nth-child(2) {
    background: url("./img/gallery1.jpg") 50% / cover;
  }
`;

//PostPage
export const StModifyCon = styled.div`
  div {
    width: 100%;
    display: flex;
    padding-bottom: 2%;
    margin-bottom: 3%;
    border-bottom: 2px solid ${Colors.lightGray};
  }
  span {
    display: block;
    padding: 0 3%;
    font-size: 1.5rem;
    font-family: ${Fonts.rogotoSlab};
    margin-right: 3%;
  }

  p {
    width: 60%;
    height: 100%;
    font-size: 1.2rem;
    line-height: 2rem;
    word-break: break-all;
    word-wrap: break-word;
  }

  input {
    font-size: 1.2rem;
    line-height: 2rem;
    padding-top: 3px;
  }

  textarea {
    width: 100%;
    font-family: ${Fonts.notoSans};
    font-size: 1rem;
    line-height: 2rem;
    margin-top: 5px;
    padding: 3% 1%;
    border: none;
  }
`;

export const StButtonCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

//Components
// AirBox
export const StAirBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

// AppLayout
export const StLayout = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: ${Colors.lightGray};
  height: 750px;
  position: relative;
`;

//Button
export const StButton = styled.button`
  padding: 3% 5%;
  border-radius: 5px;
  font-family: ${Fonts.rogotoSlab};
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor || Colors.black};
  color: ${(props) => props.color || Colors.white};

  &:hover {
    background-color: ${(props) => props.bgColor || Colors.gray};
  }
`;

// Header
export const StHeader = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 140px;
  padding: 3% 5%;
  position: static;
`;

export const StLogo = styled.h1`
  width: 270px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: ${Fonts.rogotoSlab};
  cursor: pointer;

  a:hover {
    color: ${Colors.gray};
  }
`;

// Posts
export const StPostsCon = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1% 5% 3% 5%;
  overflow-y: scroll;
`;

// Post
export const StPost = styled.div`
  position: relative;
  width: ${(props) => props.width || "26%"};
  margin-bottom: 10%;
  transition: all 0.3s;
  margin: 0 3.6% 7% 3.6%;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  cursor: pointer;

  img {
    width: 100%;
    height: 350px;
    display: block;
  }

  &:hover {
    transform: scale(1.07);
  }
`;

export const StPostTitle = styled.div`
  text-align: center;
  font-family: ${Fonts.notoSans};
  padding: 6% 5%;
  background-color: ${Colors.white};

  h3 {
    font-weight: 700;
  }
  p {
    margin-top: 5px;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

//Modal
export const StoutCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${Colors.opacityBlack};
`;

export const StDelete = styled.span`
  width: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 0.9rem;
  position: absolute;
  display: block;
  top: 15px;
  right: 15px;
  color: ${Colors.white};
  background-color: ${Colors.opacityBlack};
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.black};
  }
`;

export const StModal = styled.div``;

// NewPostsList
export const StNewPostsCon = styled.div`
  width: 100%;
  font-weight: 500;
  li {
    width: 25%;
  }
  p {
    font-size: 1rem;
    font-family: ${Fonts.notoSans};
    color: ${Colors.darkGray};
  }
`;

export const StNewPostList = styled.div`
  width: 200px;
  text-align: center;
  font-family: ${Fonts.palyFair};
  font-weight: 800;
  margin-right: 30px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
  & a:hover {
    color: ${Colors.gray};
  }
`;

// Footer
export const StFooterCon = styled.span`
  width: 100%;
  padding: 0 1%;
  line-height: 80px;
  font-weight: 400;
  letter-spacing: 0.7px;
  font-family: ${Fonts.notoSans};
  display: flex;
  position: absolute;
  bottom: 0;
  background-color: ${Colors.white};
`;
export const StFooterLogo = styled.span`
  font-size: 1.5rem;
  padding: 0 5%;
  font-weight: 600;
`;
