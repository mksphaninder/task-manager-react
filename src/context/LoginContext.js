import React, { useState, createContext, useEffect } from "react";
import { getJwtAndUserId } from "../helpers/jwt";
import LoginService from "../services/LoginService";

const LoginContext = createContext();
const { token, userId } = getJwtAndUserId();
const LoginProvider = (props) => {
  const [loginData, setLoginData] = useState({
    isLoggedIn: undefined,
    token: undefined,
    userId: undefined,
    logout() {
      setLoginData({
        ...loginData,
        isLoggedIn: false,
        userId: undefined,
        token: undefined,
      });
    },
  });

  useEffect(() => {
    let isSubscribed = true;

    const checkLogin = async () => {
      await LoginService.isAuthenticated(token)
        .then(() => {
          setLoginData({
            ...loginData,
            isLoggedIn: true,
            userId: userId,
            token: token,
          });
        })
        .catch((err) => {
          localStorage.removeItem("tm-user");
          setLoginData({
            ...loginData,
            isLoggedIn: false,
            userId: undefined,
            token: undefined,
          });
        });
    };

    if (token && userId) {
      checkLogin();
      isSubscribed = false;
    }
  }, []);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
