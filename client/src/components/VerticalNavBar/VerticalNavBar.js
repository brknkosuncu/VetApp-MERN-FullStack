import React from "react";
import { Nav, NavbarText, NavLink } from "reactstrap";
import "./vNavBar.css";
import { FaCat, FaDog, FaPaw, FaDove } from "react-icons/fa";
const VerticalNavBar = () => {
  return (
    <div>
      <Nav vertical>
        <NavbarText className={"text"}>
          <FaPaw className={"iconsAnimal"}></FaPaw> CATEGORIES
        </NavbarText>
      </Nav>
      <hr></hr>
      <Nav vertical>
        <NavLink href="#">Channels</NavLink>
        <NavLink href="#">Experts</NavLink>
        <NavLink href="#">New Added</NavLink>
        <NavLink href="#">Most Viewed </NavLink>
      </Nav>
      <hr />
      <Nav vertical>
        <NavbarText className={"text"}>
          <FaCat className={"iconsAnimal"}></FaCat> CATS
        </NavbarText>
        <NavLink href="#">Cat Care</NavLink>
        <NavLink href="#">Cat Foods</NavLink>
        <NavLink href="#">Cat Health</NavLink>
        <NavLink href="#">Kitten Special</NavLink>
      </Nav>
      <hr></hr>
      <Nav vertical>
        <NavbarText className={"text"}>
          <FaDog className={"iconsAnimal"}></FaDog> DOGS
        </NavbarText>
        <NavLink href="#">Dog Care</NavLink>
        <NavLink href="#">Dog Training </NavLink>
        <NavLink href="#">Dog Health</NavLink>
        <NavLink href="#">Dog Foods</NavLink>
        <NavLink href="#">Puppy Special</NavLink>
      </Nav>
      <hr></hr>
      <Nav vertical>
        <NavbarText className={"text"}>
          <FaDove className={"iconsAnimal"}></FaDove> BIRDS
        </NavbarText>
        <NavLink href="#">Bird Foods</NavLink>
        <NavLink href="#">Bird Care</NavLink>
        <NavLink href="#">Bird Life</NavLink>
      </Nav>
      <hr />
      <Nav vertical>
        <NavLink href="#">Help</NavLink>
      </Nav>
    </div>
  );
};

export default VerticalNavBar;
