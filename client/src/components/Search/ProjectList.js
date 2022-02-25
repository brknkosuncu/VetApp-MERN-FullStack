import React from "react";
import Project from "../Projects/Project/Project";
import { Col, Row } from "reactstrap";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";

const ProjectList = ({ projectList = [], setCurrentId, currentId }) => {
  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>

        <Col md="10">
          {projectList.map((data) => {
            if (data) {
              return (
                <div key={data.projectName}>
                  <Project
                    project={data}
                    setCurrentId={setCurrentId}
                    key={data._id}
                  />
                </div>
              );
            }
            return null;
          })}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectList;
