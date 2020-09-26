import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

function Logout(props) {
  // Subscribing to the context.
  const { loginData, setLoginData } = useContext(LoginContext);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("tm-user");

    // update Context
    loginData.logout();

    history.push("/");
  };
  return (
    loginData.isLoggedIn && (
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    )
  );
}

export default Logout;
