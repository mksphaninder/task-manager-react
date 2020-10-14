import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Alert from "./Alert";
import { useHistory, Redirect, Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import LoginService from "../services/LoginService";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(undefined);

  // Subscribing to login context
  const { loginData, setLoginData } = useContext(LoginContext);

  // To cancel subscription
  let isSubscribed = true;

  // To redirect
  let history = useHistory();

  // check for Authentication and redirect to projects page.
  if (loginData?.isLoggedIn) {
    return <Redirect to="/user-projects" />;
  }

  const handleLoginClicked = (event) => {
    event.preventDefault();
    const auth = LoginService.auth(username, password);

    if (isSubscribed) {
      // Storing token and updating the state
      auth
        .then((response) => {
          if (response.status === 422) {
            throw new Error("Validation failed!");
          }
          if (response.status !== 200 && response.status !== 201) {
            console.log("Error");
            throw new Error("Could not authenticate you!");
          }
          localStorage.setItem("tm-user", JSON.stringify(response.data));

          // Updating the context.
          setLoginData({
            ...loginData,
            isLoggedIn: true,
            token: JSON.parse(localStorage.getItem("tm-user")).token,
            userId: response.data.userId,
          });
          setAlert(false);
          isSubscribed = false;
          history.push("/user-projects");
        })
        .catch((err) => {
          setLoginData({
            isLoggedIn: false,
            token: undefined,
            userId: undefined,
          });
          setAlert(true);
          isSubscribed = false;
        });
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form className="login__form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  className="username"
                  placeholder="Enter username"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              {alert && <Alert message={"Invalid username or password"} />}
              <Button variant="primary" onClick={handleLoginClicked}>
                Submit
              </Button>
              <div className="login__form__register">
                <Link to="/register">Create a new Account</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
