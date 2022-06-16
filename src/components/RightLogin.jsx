import React from "react";
import "../css/Register.css";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RightLogin() {
  return (
    <>
      <Container className="form-container">
        <Form className="form">
          <h3>Masuk</h3>
          <Form.Group controlId="formBasicEmail" className="margin-component">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              type="text"
              className="form-border"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>
          <Form.Group controlId="password" className="margin-component">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type="password"
              className="form-border"
              placeholder="Masukkan password"
            />
          </Form.Group>
          <div className="margin-component">
            <Button type="submit" className="w-100 mt-2 mb-3 color form-border">
              Masuk
            </Button>
          </div>
          <Form.Text className="margin-component">
            <center>
              Belum punya akun?
              <Link to="/register"> Daftar disini</Link>
            </center>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
}

export default RightLogin;
