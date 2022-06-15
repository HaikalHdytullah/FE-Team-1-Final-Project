import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Kartu() {
  return (
    <Container>
      <Col className="col-2 m-2 mx-2">
        <Card className="mt-5" style={{ width: "20rem" }}>
          <Card.Img
            src="https://picsum.photos/id/133/640/480"
            className="card-img-top-img-fluid"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body style={{ fontSize: "14px" }}>
            <Card.Title className="fw-bold mt-4">Mobil</Card.Title>
            <Card.Text className="mt-2">Kendaraan</Card.Text>
            <Card.Text className="fw-bold mt-3">Rp.2.000.000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default Kartu;
