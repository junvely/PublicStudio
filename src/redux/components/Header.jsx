import React from "react";
import { Link } from "react-router-dom";
import { StHeader, StLogin, StLogo } from "styles/Components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Header() {
  return (
    <StHeader>
      <StLogo>
        <Link to="/">Public Studio</Link>
      </StLogo>
      <StLogin>
        <Link to="/account/login">Would you like to join us?</Link>
        <BsFillArrowRightCircleFill />
      </StLogin>
    </StHeader>
  );
}

export default Header;
