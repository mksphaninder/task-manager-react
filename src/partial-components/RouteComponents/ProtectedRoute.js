import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const ProtectedRoute = (props) => {
  const { loginData } = useContext(LoginContext);
  const Component = props.component;
  const isAuthenticated = loginData.isLoggedIn;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoute;
