import { Link } from "react-router-dom";
import { StHeader, StLogin, StLogo } from "styles/Components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";

function Header() {
  const [isLogin, isLoginHandler, logout] = useAuth();

  return (
    <StHeader>
      <StLogo>
        <Link to="/">Public Studio</Link>
      </StLogo>
      {!isLogin ? (
        <StLogin>
          <Link to="/account/login">Would you like to join us?</Link>
          <BsFillArrowRightCircleFill />
        </StLogin>
      ) : (
        <StLogin onClick={() => logout()}>
          <span>Logout</span>
          <BsFillArrowRightCircleFill />
        </StLogin>
      )}
    </StHeader>
  );
}

export default Header;
