import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Registration from "./Registration";
import HomeLogo from "./HomeLogo";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col md={6}>
            <HomeLogo />
          </Col>
          <Col md={6}>
            <Registration />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
