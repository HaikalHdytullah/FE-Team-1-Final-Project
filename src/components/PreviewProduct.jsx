import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import "../css/Preview.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearProduct,
  getProductById,
  deleteProduct,
} from "../redux/actions/productsActions";
import Swal from "sweetalert2";

const PreviewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { productdetail, status } = useSelector((state) => state.product);
  let productId = useParams();
  if (productdetail.length === 0) {
    setTimeout(() => {
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
      dispatch(getProductById(productId.id));
    }, 1000);
  }

  const handleEdit = async () => {
    dispatch(clearProduct());
    return navigate("/editproduct/" + productId.id);
  };
  const handleHapus = async () => {
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
    dispatch(deleteProduct(productId.id));
  };
  if (status === "deleted") {
    dispatch(clearProduct());
    return navigate("/");
  }

  return (
    <>
      {productdetail.length === 0 ? (
        <></>
      ) : (
        <Container>
          <Row>
            <Col lg={10} md={12} sm={12} className="mx-auto">
              <Row className="gx-5 justify-content-center mt-4">
                <Col sm={8}>
                  <Row>
                    <Carousel variant="dark">
                      {productdetail.productpics.length === 0 ? (
                        <></>
                      ) : (
                        productdetail.productpics.map((productpics, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={productpics.gambar}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))
                      )}
                    </Carousel>
                  </Row>
                  <Row
                    className="mx-1 mt-4 mb-4 shadow-sm"
                    style={{ borderRadius: "20px" }}
                  >
                    <p className="fw-bold text-family ps-3 pt-3 pb-3">
                      Deskripsi
                    </p>
                    <p className="text-color ps-3 lh-base pb-3">
                      {productdetail.deskripsi}
                    </p>
                  </Row>
                </Col>
                <Col sm={4}>
                  <Row className="shadow-sm" style={{ borderRadius: "20px" }}>
                    <p className="fw-bold text-family ps-4 fs-4 pt-3">
                      {productdetail.nama}
                    </p>
                    <p className="text-color ps-4 pt-1">
                      {productdetail.kategori}
                    </p>
                    <p className="fw-bold text-family ps-4 pt-3">
                      Rp {productdetail.harga}
                    </p>
                    {localStorage.getItem("token") && user ? (
                      <>
                        {productdetail.user.id === user.id ? (
                          <>
                            <div className="d-grid mt-4 gap-3">
                              <Button
                                className="button-edit fw-semibold mb-1 text-black"
                                style={{ backgroundColor: "white" }}
                                onClick={handleEdit}
                              >
                                Edit
                              </Button>
                              <Button
                                className="button-delete fw-semibold mb-4 text-black"
                                style={{ backgroundColor: "white" }}
                                onClick={handleHapus}
                              >
                                Hapus
                              </Button>
                            </div>
                          </>
                        ) : (
                          <div className="d-grid mt-4 gap-3">
                            <Button
                              className="button-add fw-semibold text-white"
                              style={{ backgroundColor: "#7126B5" }}
                            >
                              Saya tertarik dan ingin nego
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </Row>
                  <Row
                    className="mt-4 pt-3 shadow-sm"
                    style={{ borderRadius: "20px" }}
                  >
                    <Col lg={2} sm={3} className="me-3">
                      <div className="layout-foto">
                        <img
                          className="foto"
                          src={productdetail.user.gambar}
                          alt="Foto Profile"
                        />
                      </div>
                    </Col>
                    <Col lg={9} sm={10}>
                      <p className="fw-bold text-family ps-3 fs-6">
                        {productdetail.user.nama}
                      </p>
                      <p
                        className="text-color ps-3 fs-6 pt-2 pb-2"
                        style={{ marginTop: "-5px" }}
                      >
                        {productdetail.user.kota}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default PreviewProduct;
