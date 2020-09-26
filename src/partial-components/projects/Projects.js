import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/Projects.scss";
import ListItems from "../ListItems";

function Projects({ projects }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="projects">
            {projects?.map((project) => (
              <ListItems linkAddress={project.id} title={project.project} />
            ))}
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
