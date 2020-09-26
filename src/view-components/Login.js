import React, { useState, useContext } from "react";
import "../styles/Login.scss";
import LoginForm from "../partial-components/LoginForm";

function Login(props) {
  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

export default Login;
