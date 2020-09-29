import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "../partial-components/TaskList";
import { getProject } from "../services/TaskService";
import { LoginContext } from "../context/LoginContext";
import Projects from "../partial-components/projects/Projects";

function UserProjects() {
  const { loginData } = useContext(LoginContext);

  const userId = loginData.userId;

  const token = loginData.token;

  // const [username, setUsername] = useState(undefined);
  const [projects, setProjects] = useState({
    projectsList: undefined,
  });

  useEffect(() => {
    console.log("use effect login data", loginData);
    getProject(userId, token)
      .then((response) => {
        setProjects({
          ...projects,
          projectsList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loginData.token]);

  return <Projects projects={projects?.projectsList} />;
}

export default UserProjects;
