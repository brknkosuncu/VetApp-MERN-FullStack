import React, { useState } from "react";

import { Container, Form, Input, Col, Button, Row } from "reactstrap";
import "../Contact/Contact.css";
import alertify from "alertifyjs";
import axios from "axios";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";

const ContactForm = (currentId, setCurrentId) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5002/api/contact",
      data: contactData,
    }).then((response) => {
      if (response) {
        alertify.alert("Message Sent", "Thanks for feedback :)");
        setContactData({ name: "", email: "", message: "" });
      } else {
        alertify.alert("Message Failed");
      }
    });
  };
  const changeHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>
        <Col md="8">
          <Container className={"authContainer"}>
            <Form onSubmit={handleSubmit}>
              <Container>
                <p>
                  <font size="7" face="Garamond" color="maroon">
                    C
                  </font>
                  ONTACT US
                </p>
                <p>
                  <font size="5" face="Garamond" color="maroon">
                    G
                  </font>
                  ot a question? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>
                <Col>
                  <div className={"input"}>Name:</div>
                  <Input
                    name="name"
                    placeholder=""
                    onChange={changeHandler}
                    type="text"
                  ></Input>
                </Col>

                <Col>
                  <div className={"input"}>Email:</div>
                  <Input
                    name="email"
                    placeholder=""
                    onChange={changeHandler}
                    type="email"
                  ></Input>
                </Col>

                <Col>
                  <div className={"input"}>Message:</div>
                  <Input
                    name="message"
                    placeholder=""
                    onChange={changeHandler}
                    type="textarea"
                  ></Input>
                </Col>

                <Button
                  className={"submitButton"}
                  type="submit"
                  onClick={handleSubmit}
                  outline
                  color="success"
                >
                  Send
                </Button>
              </Container>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
