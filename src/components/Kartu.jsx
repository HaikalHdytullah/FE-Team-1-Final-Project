import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import productImg from "../img/product.png";

import { Typography } from "@mui/material";

import "../css/kartuHomepage.css";

const Kartu = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <Container>
      <Row>
        {product.length === 0 ? (
          <>
            <center>
              <img
                src={productImg}
                alt="produk tidak tersedia.png"
                className="mt-5"
              />
              <h3 className="mb-5 pt-5 text-center">Produk Tidak Tersedia</h3>
            </center>
          </>
        ) : (
          product.map((product) => (
            <Col key={product.id} lg={2} md={3} sm={4} xs={6} className="mt-3">
              <Link to={"/"}>
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src={product.productpics[0].gambar}
                    className="product-img"
                  />
                  <Card.Body>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.nama}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.kategori}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      className="mt-1"
                      component="div"
                    >
                      Rp.{product.harga}
                    </Typography>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Kartu;
