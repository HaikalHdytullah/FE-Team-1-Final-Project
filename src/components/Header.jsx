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
  clearProduct,
} from "../redux/actions/productsActions";
import Swal from "sweetalert2";

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

  const handleLoginButton = async () => {
    dispatch(clearProduct());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let keyword = document.getElementById("form-search").value;
    if (window.location.pathname !== "/") {
      if (keyword === "") {
        Swal.fire({
          title: "Loading",
          text: "Mengambil data produk harap tunggu sebentar",
          icon: "info",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: false,
          showCloseButton: false,
          showCancelButton: false,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
        });
        dispatch(getAllProducts());
      } else {
        Swal.fire({
          title: "Loading",
          text: "Mengambil data produk harap tunggu sebentar",
          icon: "info",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: false,
          showCloseButton: false,
          showCancelButton: false,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
        });
        dispatch(getProductByNama(keyword));
      }
      return navigate("/");
    }
    if (keyword === "") {
      Swal.fire({
        title: "Loading",
        text: "Mengambil data produk harap tunggu sebentar",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
      });
      dispatch(getAllProducts());
    } else {
      Swal.fire({
        title: "Loading",
        text: "Mengambil data produk harap tunggu sebentar",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
      });
      dispatch(getProductByNama(keyword));
    }
  };

  const handleHome = async (e) => {
    e.preventDefault();
    dispatch(clearProduct());
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getAllProducts());
    return navigate("/");
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
              <Button onClick={handleHome} className="btn-home">
                <img src={Brand} alt="" />
              </Button>
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
                          <Form onSubmit={handleSubmit}>
                            <div className="search-wrapper">
                              <Form.Control
                                id="form-search"
                                placeholder="Cari di sini ..."
                                className="search-box-field"
                              />
                              <img src={SearchIcon} alt="" />
                            </div>
                          </Form>
                        </InputGroup>
                      </div>
                      {/* Login */}
                      <div className="fw-bold">
                        <Link to="/login" onClick={handleLoginButton}>
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
                          <Form onSubmit={handleSubmit}>
                            <div className="search-wrapper">
                              <Form.Control
                                id="form-search"
                                placeholder="Cari di sini ..."
                                className="search-box-field"
                              />
                              <img src={SearchIcon} alt="" />
                            </div>
                          </Form>
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
                            onClick={() => navigate("/daftarjual")}
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
                          <Dropdown.Item>
                            <Stack direction="horizontal" gap={3}></Stack>
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
                          <Dropdown.Item onClick={() => navigate("/profile")}>
                            Akun Saya
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>
                            Keluar
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
