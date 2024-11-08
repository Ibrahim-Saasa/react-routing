import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarUI() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>StanBad</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav_item mx-4" to="/">
            Home
          </Link>{" "}
          <Link className="nav_item mx-4" to="/movies">
            Movies
          </Link>
          <Link className="nav_item mx-4" to="/Films">
            Films
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarUI;
