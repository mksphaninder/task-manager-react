import React, { useState } from "react";
import LoginService from "./LoginService";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();

  const handleLoginClicked = (event) => {
    event.preventDefault();
    const auth = LoginService.auth(username, password);
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
        props.doLogin();
        history.push("/user-projects");
      })
      .catch((err) => console.log("here", err));
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleLoginClicked}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="username"
          aria-label="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="form-control mr-sm-2"
          type="password"
          placeholder="password"
          aria-label="username"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
