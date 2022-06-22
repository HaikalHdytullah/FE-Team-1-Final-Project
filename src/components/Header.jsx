import { Button, Navbar, Container, Form, Nav } from "react-bootstrap";
import "../css/Preview.css";

import Logo from "../img/logo-image.png";

import { Search } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Container>
      <Navbar
        key="lg"
        sticky="top"
        className="shadow-sm"
        expand="lg"
        style={{ backgroundColor: "white" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} className="img-fluid my-2" alt="logo.png" />
          </Navbar.Brand>
          <Form className="ms-2 searchbar">
            <input
              class="ps-3 pe-1 inputbar my-2"
              type="search"
              placeholder="Cari di sini ..."
              aria-label="Search"
            ></input>
            <Search size={20} />
          </Form>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="success" className="mx-3" href="/login">
                Masuk
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
