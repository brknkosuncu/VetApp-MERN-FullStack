import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyProject from "./MyProjects/MyProject";
import { Col, Row } from "reactstrap";
import { getProjects } from "../../actions/projects";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";

const MyProjects = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar />
        </Col>

        <Col md="8">
          {setCurrentId
            ? "You Don't Have Any Projects So Far! Please Create a Project"
            : projects.map(
                (project) =>
                  (user?.result?.googleId === project?.creator ||
                    user?.result?._id === project?.creator) && (
                    <MyProject
                      project={project}
                      setCurrentId={setCurrentId}
                      key={project._id}
                    />
                  )
              )}
        </Col>
      </Row>
    </div>
  );
};

export default MyProjects;
