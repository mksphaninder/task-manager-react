import React from "react";
import "./styles/Header.scss";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

function Header() {
  return (
    <div className="header">
      {/* should contain logo on the left side. */}
      {/* should contain login form on the right */}
      <nav className="navbar navbar-dark bg-dark">
        <nav className="navbar navbar-expand-lg ">
          <a href="#">
            <AssignmentTurnedInIcon />
          </a>
        </nav>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="username"
            aria-label="username"
          />
          <input
            className="form-control mr-sm-2"
            type="password"
            placeholder="password"
            aria-label="username"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Login
          </button>
        </form>
      </nav>
    </div>
  );
}

// modules.export = Header;

export default Header;
