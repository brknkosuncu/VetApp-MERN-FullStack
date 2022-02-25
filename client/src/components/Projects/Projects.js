import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "./Project/Project";
import { Row } from "reactstrap";
import "./Projects.css";
import { getProjects } from "../../actions/projects";

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Row>
      {projects.map((project) => (
        <Project
          project={project}
          setCurrentId={setCurrentId}
          key={project._id}
        />
      ))}
    </Row>
  );
};

export default Projects;
