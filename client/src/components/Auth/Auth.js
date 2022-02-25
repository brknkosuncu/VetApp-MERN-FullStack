import React, { useState } from "react";
import { Container, Form, Input, Col, Row, Button, Label } from "reactstrap";
import FileBase from "react-file-base64";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { FaRegEye } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { GoogleButton } from "react-google-button";
import Icon from "./icon";

import vetImg from "../Images/vetImg.png";

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

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const showPasswordHandler = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful.Try again later.");
  };

  return (
    <div className={"body"}>
      <h>-</h>
      <Container>
        <Form className={"formAuth"} onSubmit={submitHandler}>
          {<img src={vetImg}></img>}{" "}
          <Link className={"forgotPassword"} to="/forgotPassword">
            Forgot Password?
          </Link>
          {isSignUp && (
            <>
              <Container className={"inputContainer"}>
                <Row>
                  <Col md="6">
                    <div></div>
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="Name *"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                    <div></div>
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Last name *"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <hr></hr>
                    <div>Date Of Birth *</div>
                    <Input
                      name="dateOfBirth"
                      type="date"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <hr></hr>
                    <Input
                      name="place"
                      type="text"
                      placeholder="Place *"
                      onChange={changeHandler}
                    />
                  </Col>

                  <Col md="6">
                    <hr></hr>
                    <Input
                      name="about"
                      type="text"
                      placeholder="About *"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Label tag="h7" for="image">
                    Image
                  </Label>
                  <FileBase
                    type="file"
                    multiple={false}
                    id="profileImage"
                    name="profileImage"
                    value={formData.profileImage}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, profileImage: base64 })
                    }
                  />
                </Row>
                <Row>
                  <Col md="12">
                    <hr></hr>
                    <div>Website</div>
                    <Input
                      name="website"
                      type="text"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
              </Container>
            </>
          )}
          <Container className={"inputContainer"}>
            <div></div>
            <Input
              name="email"
              type="email"
              placeholder="Email *"
              onChange={changeHandler}
            />
            <div>
              <FaRegEye onClick={showPasswordHandler}>s</FaRegEye>
            </div>
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              onChange={changeHandler}
            />
          </Container>
          {isSignUp && (
            <Container className={"inputContainer"}>
              <div>Repeat password *</div>
              <Input
                name="confirmPassword"
                placeholder=""
                onChange={changeHandler}
                type="password"
              />
            </Container>
          )}
          <div>
            <Button type="submit" className={"submitButtonS"} color="primary">
              <h3>{isSignUp ? "Sign Up" : "Sign In"}</h3>
            </Button>

            <Button
              className={"submitButton1"}
              color="danger"
              onClick={switchMode}
            >
              <h6>
                {isSignUp
                  ? "Already have an account? Sing In"
                  : "Don't have an acount? Sign Up"}
              </h6>
            </Button>
          </div>
          <GoogleLogin
            clientId="1016435746988-10mqv9o126tr3h6v6vg8l2mtqm6lieo2.apps.googleusercontent.com"
            render={(renderProps) => (
              <GoogleButton
                className={"googleButton"}
                color="primary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
              >
                {<Icon />} Google Sign In
              </GoogleButton>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <div>*</div>
        </Form>
      </Container>
      <h>-</h>
    </div>
  );
};

export default Auth;
