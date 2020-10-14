import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../styles/Projects.scss";
import ListItems from "../ListItems";

function Projects({ projects }) {
  // To get the current path.
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="projects">
            {projects?.map((project) => {
              return (
                <ListItems
                  linkAddress={`${currentPath}/${project.id}`}
                  title={project.project}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;

/**
 * show the list of all the projects here
 */
