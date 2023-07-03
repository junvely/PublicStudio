import React from "react";
import NewPostsList from "../NewPostsList";
import { StFooterCon, StFooterLogo } from "styles/Components";

function Footer({ isActive }) {
  return (
    <>
      <StFooterCon>
        <StFooterLogo>NEWS</StFooterLogo>
        <NewPostsList isActive={isActive}></NewPostsList>
      </StFooterCon>
    </>
  );
}

export default Footer;
