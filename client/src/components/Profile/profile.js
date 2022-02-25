import React, { useEffect } from "react";
import { CardImg, Row, Col } from "reactstrap";
import { singleUser } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import "./profile.css";
import { FaUserSlash } from "react-icons/fa";

const ProfileDetails = (currentId, setCurrentId, project) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const { id } = useParams();

  useEffect(() => {
    dispatch(singleUser(id));
  }, [id]);

  console.log(user);
  return (
    <div>
      <Row>
        <Col md="2">
          <VerticalNavBar currentId={currentId} setCurrentId={setCurrentId} />
        </Col>

        {user?.user ? (
          <Col md="8">
            {user?.user?.profileImage ? (
              <div className={"image2"}>
                <CardImg
                  top
                  src={user ? user.user.profileImage : null}
                  alt=""
                />
              </div>
            ) : (
              <div className={"avatarProfile"}>
                <h3 style={{ color: "dark" }}>{user?.user?.name?.charAt(0)}</h3>
              </div>
            )}
            <hr></hr>
            <h6 style={{ color: "red" }}>Name: </h6>{" "}
            {user ? user?.user?.name : "nullf"} <hr></hr>
            <h6 style={{ color: "red" }}>About: </h6>{" "}
            {user ? user?.user?.about : "nullf"} <hr></hr>
            <h6 style={{ color: "red" }}>Contact: </h6>{" "}
            {user ? user?.user?.email : "nullf"} <hr></hr>
            <h6 style={{ color: "red" }}>Date Of Birth: </h6>{" "}
            {user ? user?.user?.dateOfBirth?.slice(0, 10) : "nullf"} <hr></hr>
            <h6 style={{ color: "red" }}>Place: </h6>{" "}
            {user ? user?.user?.place : "nullf"} <hr></hr>
            <h6 style={{ color: "red" }}>Website: </h6>{" "}
            {user ? user?.user?.website : "nullf"} <hr></hr>
          </Col>
        ) : (
          <Col md="8">
            <div className={"err"}>
              <FaUserSlash size={100}></FaUserSlash>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ProfileDetails;
