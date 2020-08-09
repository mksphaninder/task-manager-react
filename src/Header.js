import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function Header({ isLoggedin, doLogout, doLogin }) {
  return (
    <div className="header">
      {/* should contain logo on the left side. */}
      {/* should contain login form on the right */}
      <nav className="navbar navbar-dark bg-dark">
        <nav className="navbar navbar-expand-lg ">
          <Link to="/">
            <AssignmentTurnedInIcon />
          </Link>
        </nav>
        {(isLoggedin && <Logout doLogout={doLogout} />) || (
          <LoginForm doLogin={doLogin} />
        )}
      </nav>
    </div>
  );
}

// modules.export = Header;

export default Header;
