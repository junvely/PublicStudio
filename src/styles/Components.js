import styled from "styled-components";
import { Colors, Fonts } from "./Them";

// AppLayout
export const StLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: ${Colors.lightGray};
  height: 700px;
  position: relative;
`;

// Header
export const StHeader = styled.div`
  width: 100%;
  max-width: 1200px;
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

  &:hover {
    color: ${Colors.gray};
  }
`;

// MainPage

export const StMainCon = styled.div`
  padding: 3% 13%;
`;

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

export const StPostsCon = styled.div`
  width: 60%;
  padding: 5% 5% 5% 0;
  position: absolute;

  top: 0;
  right: 0;

  li {
    width: 50%;
    height: 500px;
    margin-left: 10%;
    border-radius: 10px;
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
// a img {-webkit-filter: grayscale(100%); filter: gray;}

// a:hover img {-webkit-filter: grayscale(0%); filter: none;}

// NewPostsList
export const StNewPostsCon = styled.div`
  width: 50%;
  li {
    width: 25%;
  }
  p {
    font-size: 0.9rem;
    color: ${Colors.darkGray};
  }
`;

// Footer

export const StFooterCon = styled.span`
  width: 100%;
  padding: 0 1%;
  display: flex;
  position: absolute;
  bottom: 0;
  background-color: ${Colors.white};
  line-height: 80px;
  font-weight: 400;
  letter-spacing: 0.7px;
  font-family: ${Fonts.notoSans};
`;
export const StFooterLogo = styled.span`
  font-size: 1.5rem;
  padding: 0 5%;
  font-weight: 600;
`;
