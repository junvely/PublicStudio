import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StHeader, StLogin, StLogo } from "styles/Components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { cookie } from "api/auth/cookie";

function Header() {
  const [loginActive, setLoginActive] = useState(true);
  const token = cookie.get("accessToken");

  useEffect(() => {
    if (token) {
      setLoginActive(false);
    } else {
      setLoginActive(true);
    }
  }, []);

  return (
    <StHeader>
      <StLogo>
        <Link to="/">Public Studio</Link>
      </StLogo>
      {loginActive && (
        <StLogin>
          <Link to="/account/login">Would you like to join us?</Link>
          <BsFillArrowRightCircleFill />
        </StLogin>
      )}
    </StHeader>
  );
}

export default Header;
