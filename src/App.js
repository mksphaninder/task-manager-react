import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import UserProjects from "./UserProjects";
import AuthenticatedComponent from "./AuthenticatedComponent";
import { getJwtAndUserId } from "./helpers/jwt";
import Axios from "axios";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const { token } = getJwtAndUserId();
    if (token) {
      const isAuthorized = async () => {
        const response = await Axios.get(
          "http://localhost:5050/auth/is-authorized",
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        ).catch((err) => console.log(err.message));

        if (response?.status === 200) {
          setLogin(true);
        } else if (response?.status === 500) {
          setLogin(false);
          localStorage.removeItem("tm-user");
        }
      };
      isAuthorized();
    }
  }, [login]);

  const doLogout = () => {
    setLogin(false);
  };

  const doLogin = () => {
    setLogin(true);
  };

  return (
    <Router>
      <Header isLoggedin={login} doLogout={doLogout} doLogin={doLogin} />

      <Switch>
        <Route path="/user-projects">
          <AuthenticatedComponent>
            <UserProjects />
          </AuthenticatedComponent>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
