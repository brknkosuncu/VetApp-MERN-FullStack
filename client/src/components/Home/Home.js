import React from "react";
import { Col, Row } from "reactstrap";
import Projects from "../Projects/Projects";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import "./Home.css";

const Home = ({ currentId, setCurrentId }) => {
  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>

        <Col md="9">
          <Projects setCurrentId={setCurrentId} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
