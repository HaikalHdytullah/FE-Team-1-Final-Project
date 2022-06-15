import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import React from "react";
import "../css/header.css";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="mt-1">
            <img src="../../logo.png" alt="logo" />
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Button
              className="fw-bold text-white"
              id="btn-register"
              href="/register"
            ></Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
