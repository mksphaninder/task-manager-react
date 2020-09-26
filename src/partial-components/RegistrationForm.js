import React, { useState } from "react";
import "../styles/Registration.scss";
import { Form, Button } from "react-bootstrap";
import RegistrationService from "../RegistrationService";
import Alert from "./Alert";
import Success from "./Success";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [alertMessages, setAlertMessages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();
    const register = async () => {
      await RegistrationService.register(email, username, password, dob)
        .then((response) => {
          setAlertMessages(alertMessages.splice());
          setSuccess(true);
        })
        .catch((err) => {
          setSuccess(false);
          // clear the old state
          setAlertMessages(alertMessages.splice());
          // add the new alert messages
          setAlertMessages((prevState) =>
            prevState.concat(
              err.response.data.data.map((e) => {
                return e.param + ":  " + e.msg;
              })
            )
          );
        });
    };
    register();
  };

  return (
    <div className="registration">
      <div className="registration__title">
        <h4>Create an account!</h4>
      </div>
      <div className="registration__form">
        <Form onSubmit={handleRegistration}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Username"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </Form.Group>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          {alertMessages?.length > 0 &&
            alertMessages.map((error) => {
              return <Alert message={error} />;
            })}
          {success && (
            <Success message={"User created successfully, you can now login"} />
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegistrationForm;
