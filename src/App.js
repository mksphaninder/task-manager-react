import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./partial-components/Header";
import Footer from "./partial-components/Footer";
import UserProjects from "./view-components/UserProjects";
import ErrorPage from "./view-components/ErrorPage";
import { LoginProvider } from "./context/LoginContext";
import Login from "./view-components/Login";
import Register from "./view-components/Register";
import Home from "./view-components/Home";
import ProtectedRoute from "./partial-components/RouteComponents/ProtectedRoute";

function App() {
  return (
    <Router>
      <LoginProvider>
        <Header />

        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/user-projects">
            <UserProjects />
          </Route> */}
          <ProtectedRoute
            exact
            path="/user-projects"
            component={UserProjects}
          />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </LoginProvider>
    </Router>
  );
}

export default App;
