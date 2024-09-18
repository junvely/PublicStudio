import { useState } from "react";
import { cookie } from "../api/auth/cookie";

export const useAuth = () => {
  const isToken = cookie.get("accessToken") ? true : false;
  const [isLogin, setIsLogin] = useState(isToken);

  const isLoginHandler = () => {
    const token = cookie.get("accessToken");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const logout = () => {
    cookie.remove("accessToken");
    isLoginHandler();
  };

  return [isLogin, isLoginHandler, logout];
};
