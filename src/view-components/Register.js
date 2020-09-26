import React, { useContext, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeLogo from "../partial-components/HomeLogo";
import { LoginContext } from "../context/LoginContext";
import { Redirect, useHistory } from "react-router-dom";
import RegistrationForm from "../partial-components/RegistrationForm";

function Register() {
  const history = useHistory();
  // subscribe to context
  const context = useContext(LoginContext);

  return (
    <div className="home">
      <Container>
        <Row>
          <Col md={6}>
            <HomeLogo />
          </Col>
          <Col md={6}>
            <RegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
