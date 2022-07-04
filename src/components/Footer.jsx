import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import plus from "../img/fi_plus.png";
import "../css/footer.css";

const FooterComponent = () => {
  return (
    <footer className="fixed-bottom my-3">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto">
            <Link to="/addproduct">
              <Button type="submit" className="btn-jual">
                <img src={plus} className="me-2" alt="plus.png" /> Jual
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
