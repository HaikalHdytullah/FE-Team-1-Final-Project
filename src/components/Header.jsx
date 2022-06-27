import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Stack,
  Dropdown,
  InputGroup,
  Form,
} from "react-bootstrap";
import { logout, whoami } from "../redux/actions/authActions";
import Brand from "../img/Brand.png";
import ProfileImage from "../img/profile-image.png";
import SearchIcon from "../img/fi_search.png";
import LoginIcon from "../img/fi_log-in.png";
import ListIcon from "../img/fi_list.png";
import Bell from "../img/fi_bell.png";
import User from "../img/fi_user.png";

import "../css/header.css";

import {
  getProductByNama,
  getAllProducts,
} from "../redux/actions/productsActions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };

  setTimeout(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
    }
  }, 5 * 60000);

  const handleSubmit = async () => {
    let keyword = document.getElementById("form-search").value;
    if (keyword === "") {
      dispatch(getAllProducts());
    } else {
      dispatch(getProductByNama(keyword));
    }
  };

  const handleKeyPress = async (target) => {
    if (target.charCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="navbar-component py-1">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbar-body py-1"
          fixed="top"
        >
          <Container className="navbar-body">
            <Navbar.Brand>
              <Link to="/">
                <img src={Brand} alt="" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Second Hand
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  {!user ? (
                    <>
                      {/* Search Box */}
                      <div className="search-box me-auto">
                        <InputGroup>
                          <Form.Control
                            id="form-search"
                            placeholder="Cari di sini ..."
                            className="search-box-field"
                            onKeyPress={handleKeyPress}
                          />
                          <Button
                            type="submit"
                            variant="light"
                            id="button-addon2"
                            className="search-box-button"
                            onClick={handleSubmit}
                          >
                            <img src={SearchIcon} alt="" />
                          </Button>
                        </InputGroup>
                      </div>
                      {/* Login */}
                      <div className="fw-bold">
                        <Link to="/login">
                          <Button className="button-link border-0">
                            <img src={LoginIcon} alt="" />
                            Masuk
                          </Button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Search Box */}
                      <div className="search-box me-auto">
                        <InputGroup>
                          <Form.Control
                            id="form-search"
                            placeholder="Cari di sini ..."
                            className="search-box-field"
                            onKeyPress={handleKeyPress}
                          />
                          <Button
                            type="submit"
                            variant="light"
                            id="button-addon2"
                            className="search-box-button"
                            onClick={handleSubmit}
                          >
                            <img src={SearchIcon} alt="" />
                          </Button>
                        </InputGroup>
                      </div>
                      {/* Menu */}
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="navbar-icon"
                        >
                          <img src={ListIcon} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/")}>
                            Beranda
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => navigate("/daftar-jual")}
                          >
                            Daftar Jual
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Notification */}
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="navbar-icon"
                        >
                          <img src={Bell} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/transaksi")}>
                            <Stack direction="horizontal" gap={3}>
                              <img
                                src={ProfileImage}
                                alt=""
                                className="imageSmall align-self-start mt-1"
                              />
                              <div>
                                <p
                                  className="my-auto"
                                  style={{ fontSize: "10px", color: "#BABABA" }}
                                >
                                  Penawaran Produk
                                </p>
                                <h5
                                  className="my-auto"
                                  style={{
                                    fontSize: "12px",
                                    lineHeight: "22px",
                                  }}
                                >
                                  Jam Tangan Casio
                                </h5>
                                <h5
                                  className="my-auto"
                                  style={{
                                    fontSize: "12px",
                                    lineHeight: "22px",
                                  }}
                                >
                                  Rp. 250.000
                                </h5>
                                <h5
                                  className="my-auto"
                                  style={{
                                    fontSize: "12px",
                                    lineHeight: "22px",
                                  }}
                                >
                                  Ditawar Rp.200.000
                                </h5>
                              </div>
                              <p
                                className="align-self-start ms-auto"
                                style={{ fontSize: "12px", color: "#BABABA" }}
                              >
                                20 Apr, 14:04
                              </p>
                            </Stack>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Profile */}
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="navbar-icon"
                        >
                          <img src={User} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/info-akun")}>
                            Akun Saya
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
