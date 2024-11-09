import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { FaHeart } from "react-icons/fa";
import "./navbar.css";
import FavMovies from "./FavMovies";
import "react-modern-drawer/dist/index.css";

function NavbarUI() {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
            <Link>
              <FaHeart color="red" onClick={() => setOpen(true)} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        direction="right"
        className="bla bla bla"
      >
        <FavMovies />
      </Drawer>
    </div>
  );
}

export default NavbarUI;
