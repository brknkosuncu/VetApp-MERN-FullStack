import React, { useState } from "react";
import { Container, Form, Input, Button, Row } from "reactstrap";
import "../Auth.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../actions/auth";
import vetImg from "../../Images/vetImg.png";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  about: "",
  place: "",
  website: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
  profileImage: "",
};

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(formData));
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={"body"}>
      <h>-</h>
      <Container>
        <Form className={"formAuth"} onSubmit={submitHandler}>
          {<img src={vetImg}></img>}
          <Container className={"inputContainer"}>
            <div></div>
            <Input
              name="email"
              type="email"
              placeholder="Email *"
              onChange={changeHandler}
            />
          </Container>

          <Row>
            <Button
              type="submit"
              className={"submitButtonSend"}
              color="primary"
            >
              Send mail
            </Button>
            <Link
              type="submit"
              className={"submitButtonSendSign"}
              color="primary"
              to="/auth"
            >
              Sign in
            </Link>
          </Row>

          <br></br>
          <br></br>
        </Form>
      </Container>
      <h>-</h>
    </div>
  );
};

export default ForgotPassword;
