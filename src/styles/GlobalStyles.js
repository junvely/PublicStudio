import styled, { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "./Them";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${Fonts.ro};
    }
    
    ul,li{
      list-style: none;
    }

    a{
      text-decoration: none;
      color: ${Colors.black};
    }

    button,input{
      border: none;
      outline: none;
    }

    button{
      cursor: pointer;
    }

`;

export const StFlexWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`;

export const StSection = styled.section`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: space-between;
`;

export const StPositionSec = styled.section`
  position: ${(props) => props.position && "relative"};
  width: 100%;
  height: 530px;
`;

export const StInnerCon = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding};
`;

export const StFlexCon = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding};
`;

export const StFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StDetailCon = styled.div`
  width: 50%;
  max-width: 530px;
  height: ${(props) => props.height};
  font-family: ${Fonts.notoSans};
  font-weight: 500;
  padding: 3%;
  background-color: ${Colors.white};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;
