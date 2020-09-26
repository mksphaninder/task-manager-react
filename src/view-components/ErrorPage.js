import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function ErrorPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="h2">Page Not Found!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ErrorPage;
