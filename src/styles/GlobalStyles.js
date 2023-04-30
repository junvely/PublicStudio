import styled, { createGlobalStyle } from "styled-components";
import { Fonts } from "./Them";

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

`;

export const StFlexWrap = styled.div`
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
`;

export const StInnerCon = styled.div`
  width: 100%;
  padding: ${(props) => props.padding};
`;

export const StFlexCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding};
`;

export const StList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
