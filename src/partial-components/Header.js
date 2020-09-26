import React from "react";
import "../styles/Header.scss";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Logout from "../Logout";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Button } from "react-bootstrap";

function Header() {
  // Subscribing to context
  const { loginData } = useContext(LoginContext);
  return (
    <div className="header">
      <nav className="navbar navbar-dark bg-dark">
        <nav className="navbar navbar-expand-lg ">
          <Link to="/">
            <AssignmentTurnedInIcon />
          </Link>
        </nav>
        {loginData.isLoggedIn === true ? (
          <Logout />
        ) : (
          <Button variant="success" href="/login">
            Login
          </Button>
        )}
      </nav>
    </div>
  );
}

export default Header;
