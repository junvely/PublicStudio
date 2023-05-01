import React from "react";
import { Link } from "react-router-dom";
import { StHeader, StLogo } from "styles/Components";

function Header() {
  return (
    <StHeader>
      <StLogo>
        <Link to="/">Public Studio</Link>
      </StLogo>
    </StHeader>
  );
}

export default Header;
