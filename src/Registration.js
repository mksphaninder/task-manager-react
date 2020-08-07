import React from "react";
import "./styles/Registration.scss";
import { Form, Button } from "react-bootstrap";

function Registration() {
  return (
    <div className="registration">
      <div className="registration__title">
        <h4>Create an account!</h4>
      </div>
      <div className="registration__form">
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
