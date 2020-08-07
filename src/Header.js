import React from "react";
import "./styles/Header.scss";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Row, Col, Form, Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      {/* should contain logo on the left side. */}
      {/* should contain login form on the right */}
      <Row>
        <Col>
          <div className="header__left">
            <AssignmentTurnedInIcon />
          </div>
          {/* header__left */}
        </Col>
        <Col>
          <div className="header__right d-flex flex-row-reverse">
            <form className="form-inline">
              <div className="form-group">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success mb-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* header__right */}
        </Col>
      </Row>
    </div>
  );
}

export default Header;
