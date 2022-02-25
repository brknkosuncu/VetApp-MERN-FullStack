import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";
import { useDispatch } from "react-redux";
import { deleteProject, likeProject } from "../../../actions/projects";
import { Link, useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { FaRegTrashAlt, FaThumbsUp, FaEdit } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState, useEffect } from "react";

import decode from "jwt-decode";

import alertify from "alertifyjs";

const Project = ({ project, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
    alertify.alert("Succesful", "Successfully logged out.");
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const Likes = () => {
    if (project.likes.length > 0) {
      return project.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          &nbsp;
          {project.likes.length > 2
            ? `You and ${project.likes.length - 1} others`
            : `${project.likes.length} Like${
                project.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          &nbsp;{project.likes.length}
          {project.likes.length === 1 ? " Like" : " Likes"}
        </>
      );
    }

    return <>&nbsp;Like</>;
  };
  const submit = () => {
    confirmAlert({
      title: "Deleting Project",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteProject(project._id)),
        },
        {
          label: "No",
          onClick: () => () => alert("Click No"),
        },
      ],
    });
  };
  const openProject = () => history.push(`/projects/${project._id}`);
  const openUser = () => history.push(`/user/${project?.creator}`);

  return (
    <div>
      <Card style={{ width: "25rem" }} className="card">
        <Card.Img
          variant="top"
          className="img"
          src={project.image}
          alt="Proje Resmi"
        />

        <Card.Body>
          <Card.Title>
            <Link onClick={openProject}>{project.projectName}</Link>
          </Card.Title>
          <Card.Text>{project.title}</Card.Text>
          <hr></hr>
          <Card.Text tag="h8">
            <Link onClick={openUser}>{project.name}</Link>

            <fr className={"fr"}></fr>
            {moment(project.createdAt).fromNow()}
          </Card.Text>
          <Link>
            <FaThumbsUp
              className={"icons"}
              size={25}
              disabled={!user?.result}
              onClick={() => dispatch(likeProject(project._id))}
            >
              <Likes />
            </FaThumbsUp>
          </Link>{" "}
          <h className={"likee"}>
            <Likes></Likes>
          </h>
          {(user?.result?.googleId === project?.creator ||
            user?.result?._id === project?.creator) && (
            <Link>
              <FaRegTrashAlt size={25} onClick={() => dispatch(submit)}>
                Sil
              </FaRegTrashAlt>
            </Link>
          )}
          {(user?.result?.googleId === project?.creator ||
            user?.result?._id === project?.creator) && (
            <Link to="/project/createProject">
              <FaEdit
                size={25}
                className={"icons"}
                onClick={() => setCurrentId(project._id)}
              >
                Düzenle
              </FaEdit>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
