import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const ProtectedRoute = (props) => {
  const { loginData } = useContext(LoginContext);
  const Component = props.component;
  const isAuthenticated = loginData.isLoggedIn;

  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoute;
