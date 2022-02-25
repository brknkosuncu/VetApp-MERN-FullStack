import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

import FileBase from "react-file-base64";
import "./ProjectForm.css";
import { useDispatch } from "react-redux";
import { createProject, updateProject } from "../../../actions/projects";
import { useSelector } from "react-redux";
import VerticalNavBar from "../../VerticalNavBar/VerticalNavBar";

const ProjectForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    currentId ? state.projects.find((p) => p._id === currentId) : null
  );

  const [projectData, setProjectData] = useState({
    projectName: "",
    groupName: "",
    projectType: "",
    image: "",
    title: "",
    description: "",
    gitHub: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateProject(currentId, { ...projectData, name: user?.result?.name })
      );
    } else {
      dispatch(createProject({ ...projectData, name: user?.result?.name }));
    }
    clear();
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProjectData({ ...projectData, [name]: value });
  };

  const clear = () => {
    setCurrentId(null);
    setProjectData({
      projectName: "",
      groupName: "",
      projectFile: "",
      projectType: "",
      image: "",
      title: "",
      description: "",
      gitHub: "",
    });
  };
  if (!user?.result?.name) {
    return (
      <Button className={"contactButton"} href="/contact">
        Contact Us
      </Button>
    );
  }

  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>
        <Col md="10">
          <Form onSubmit={submitHandler} className={"form1"}>
            <h4 className={"create"}>
              {currentId ? "Edit" : "Create"} a Project{" "}
            </h4>

            <FormGroup>
              <Label tag="h7" for="projectName">
                Project Name
              </Label>
              <Input
                type="text"
                bsSize="sm"
                id="projectName"
                name="projectName"
                value={projectData.projectName}
                onChange={changeHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label tag="h7" for="title">
                Title
              </Label>
              <Input
                type="text"
                bsSize="sm"
                id="title"
                name="title"
                value={projectData.title}
                onChange={changeHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label tag="h7" for="description">
                Description
              </Label>
              <Input
                type="textarea"
                bsSize="md"
                id="description"
                name="description"
                value={projectData.description}
                onChange={changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label tag="h7" for="image">
                Image:
              </Label>
              <FileBase
                type="file"
                multiple={false}
                id="image"
                name="image"
                value={projectData.image}
                onDone={({ base64 }) =>
                  setProjectData({ ...projectData, image: base64 })
                }
              />

              <Label tag="h7" for="projectFile">
                File:
              </Label>
              <FileBase
                type="file"
                multiple={false}
                id="projectFile"
                name="projectFile"
                value={projectData.projectFile}
                onDone={({ base64 }) =>
                  setProjectData({ ...projectData, projectFile: base64 })
                }
              />
            </FormGroup>

            <hr></hr>

            <Button type="submit" color="primary" className={"button"}>
              {currentId ? "Update" : "Create"}
            </Button>
            <Button color="danger" className={"button"} onClick={clear}>
              Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectForm;
