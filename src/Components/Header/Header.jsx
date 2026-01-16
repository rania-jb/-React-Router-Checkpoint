import React from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = ({ setSearch, setRating }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleChangeRating = (e) => {
    setRating(Number(e.target.value));
  };
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Netfly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />

            <Form.Control
              type="number"
              placeholder="rating"
              className="me-2"
              min={0}
              max={10}
              step={0.1}
              onChange={handleChangeRating}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
