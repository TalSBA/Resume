import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menu.css";

function Menu(props) {
  return (
    <Navbar
      className="c-menu"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">Tal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#skills">SKILLS</Nav.Link>
            <Nav.Link href="#resume">RESUME</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
