import React, { useState, useEffect, useContext } from "react";
import { getJwtAndUserId } from "../helpers/jwt";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ListItems from "../partial-components/ListItems";
import { LoginContext } from "../context/LoginContext";

function UserProjects() {
  const { loginData } = useContext(LoginContext);
  const { user, setUser } = useState();
  const [projects, setprojects] = useState();

  let history = useHistory();

  const getUser = (userID) => {
    return Axios.get(`http://localhost:5050/auth/users/${userID}`, {
      headers: {
        Authorization: `bearer ${loginData?.jwt}`,
      },
    });
  };

  const getProjects = (userID) => {
    return Axios.get(`http://localhost:5050/users/${userID}/projects`, {
      headers: {
        Authorization: `bearer ${loginData?.jwt}`,
      },
    });
  };

  useEffect(() => {
    console.log(loginData);
    const userDetails = async () => {
      await getUser(loginData?.userId)
        .then((user) => {
          setUser(user.data);
        })
        .catch((err) => {
          console.log("user error");
          console.log(err);
        });
    };

    const projectDetails = async () => {
      await getProjects(loginData.userId)
        .then((projects) => {
          setprojects(projects.data);
        })
        .catch((err) => {
          console.log("project error");
          console.log(err.response);
        });
    };

    userDetails();

    projectDetails();
  }, []);

  useEffect(() => {
    if (!loginData.isLoggedin) {
      history.push("/login");
    }
  }, []);
  return (
    <div className="project">
      <Container>
        <Row>
          <Col>
            <div className="project__title">
              {user && (
                <p className="h2 d-flex justify-content-center">
                  Welcome {user?.username}
                </p>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="projects__title__projects">
              <ul className="List-group">
                {projects &&
                  projects?.map((p) => (
                    <ListItems
                      linkAddress={`/user-projects/${p?.id}`}
                      title={p?.project}
                      key={p?.project}
                    />
                  ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProjects;
