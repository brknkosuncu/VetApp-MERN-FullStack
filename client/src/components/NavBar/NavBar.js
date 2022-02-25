import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Col, Button, Row, CardImg, NavbarText} from "reactstrap";
import "./NavBar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import alertify from "alertifyjs";
import vetImg from "../Images/vetImg.png";
import {MdContactMail, MdCreate} from "react-icons/md"
import SearchBar from "../Search/SearchBar";

const NavBar = () => {
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

  return (
    
    <Navbar className={"navbar"} color="light" light expand="sm">
      <NavbarText className={"textIcon"}>
      <Link to="/contact">
        <MdContactMail>  
        </MdContactMail>
          </Link>
        </NavbarText>


      {user ? (
       
      <NavbarText className={"textIcon"}>
      <Link to="/project/createProject">
        <MdCreate>  
        </MdCreate>
          </Link>
        </NavbarText>
      ) : "" }
     
      <NavbarBrand href="/">
        <h2 style={{ color: "red" }} className={"syp"}>
        <img src={vetImg} ></img>
        </h2>
      </NavbarBrand>
      
      <NavbarBrand  href="/searchPage" className={"searchBar"}>
      <Button  type="submit" outline color="success">
          Search Box &nbsp; <FaSearch/>
        </Button>
      </NavbarBrand>
     

      
      <Col md="3" className={"toolBar"}>
        {user ? (
          
          <Row className={"profile"}>
             
            <NavbarBrand href="/myProjects">
              <h7 style={{ color: "dark" }}>My Projects</h7>
            </NavbarBrand>

            {user.result.profileImage ? (
              <div className={"img1"}>
                <CardImg
                  top
                  height="40px"
                  src={user ? user.result.profileImage : null}
                  alt=""
                />
              </div>
            ) : (
              <div className={"avatar"}>
                <h3 style={{ color: "dark" }}>{user.result.name.charAt(0)}</h3>
              </div>
            )}

            <NavbarBrand href={`/user/${user?.result?._id}`}>
              <h7 style={{ color: "dark" }}>{user.result.name}</h7>
            </NavbarBrand>
           
            <Button className={"submitButtonLogOut"} type="submit" onClick={logout} outline color="danger">
                           Logout
                    </Button>
          </Row>
        ) : (
          <Button  href={"/auth"} type="submit" outline color="info" >
            Sign In
          </Button>
        )}
      </Col>
    </Navbar>
  );
};

export default NavBar;