import React from "react";
import "./styles/Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <span className="footer__text">
                This site is still under Construction by Krishna{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
