import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardHeader, Col, Row } from "reactstrap";
import { getSingleProject } from "../../actions/projects";

import CommentSection from "./CommentSection";

import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import moment from "moment";
import "./ProjectDetails.css";

const ProjectDetails = (currentId, setCurrentId) => {
  const { project, projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSingleProject(id));
  }, [id]);

  function NewlineText(project) {
    const description = project.description;
    const newDescription = description.split("\n").map((str) => <p>{str}</p>);
    return newDescription;
  }

  const openUser = () => history.push(`/user/${project?.creator}`);
  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>

        <Col md="7">
          <CardHeader tag="h6" className="pName">
            <strong>{project ? project.projectName : "nullf"} </strong>
          </CardHeader>

          <CardHeader>{project ? NewlineText(project) : "nullf"} </CardHeader>

          <CardHeader className={"time"}>
            {moment(project ? project.createdAt : "nullf").fromNow()}
          </CardHeader>

          <CardHeader>
            {" "}
            Written By:{" "}
            <Link onClick={openUser}>{project ? project.name : "nullf"} </Link>
          </CardHeader>
          <CardHeader>
            <h className={"download"}>
              <a
                download={project ? project.projectName : "nullf"}
                href={project ? project.projectFile : "nullf"}
              >
                Click Here To Download
              </a>
            </h>
          </CardHeader>
        </Col>

        <Col md="3">
          <CommentSection project={project} key={project} />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
