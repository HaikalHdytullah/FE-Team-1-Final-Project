import React from "react";
import "../css/Register.css";
import { Container, Form, Button } from "react-bootstrap";

function RightRegister() {
  return (
    <>
      <Container className="form-container">
        <Form className="form">
          <h3>Daftar</h3>
          <Form.Group controlId="formBasicName" className="margin-component">
            <Form.Label className="label">Nama</Form.Label>
            <Form.Control
              type="text"
              className="form-border"
              placeholder="Name Lengkap"
            />
          </Form.Group>
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
              Daftar
            </Button>
          </div>
          <Form.Text className="margin-component">
            <center>
              Sudah punya akun?
              <a href="#"> Masuk disini</a>
            </center>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
}

export default RightRegister;
