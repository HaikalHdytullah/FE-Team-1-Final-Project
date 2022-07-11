import {
  Row,
  Col,
  Container,
  Button,
  Table,
  Stack,
  Card,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  clearProduct,
  getProductById,
  deleteProduct,
  getProductByIdSeller,
} from "../redux/actions/productsActions";
import Swal from "sweetalert2";
import CurrencyFormat from "react-currency-format";
import AddProduct from "../img/addProduct.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/daftarJual.css";
import User from "../img/user.png";
import productImg from "../img/product.png";

const DaftarJual = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { product, status } = useSelector((state) => state.product);

  const handleSubmit = async () => {};

  // Filter Produk Tersedia
  const filterTersedia = (event) => {
    event.currentTarget.classList.remove("kategoriInActive");
    event.currentTarget.classList.add("kategoriActive");

    document
      .getElementById("filterDiminati")
      .classList.remove("kategoriActive");
    document.getElementById("filterDiminati").classList.add("kategoriInActive");
    document.getElementById("filterTerjual").classList.remove("kategoriActive");
    document.getElementById("filterTerjual").classList.add("kategoriInActive");
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
    dispatch(
      getProductByIdSeller({ idUser: user.id, minat: "", terjual: "f" })
    );
  };

  // Filter Produk Diminati
  const filterDiminati = (event) => {
    event.currentTarget.classList.remove("kategoriInActive");
    event.currentTarget.classList.add("kategoriActive");

    document
      .getElementById("filterTersedia")
      .classList.remove("kategoriActive");
    document.getElementById("filterTersedia").classList.add("kategoriInActive");
    document.getElementById("filterTerjual").classList.remove("kategoriActive");
    document.getElementById("filterTerjual").classList.add("kategoriInActive");
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
    dispatch(
      getProductByIdSeller({ idUser: user.id, minat: "t", terjual: "" })
    );
  };

  // Filter Produk Terjual
  const filterTerjual = (event) => {
    event.currentTarget.classList.remove("kategoriInActive");
    event.currentTarget.classList.add("kategoriActive");

    document
      .getElementById("filterTersedia")
      .classList.remove("kategoriActive");
    document.getElementById("filterTersedia").classList.add("kategoriInActive");
    document
      .getElementById("filterDiminati")
      .classList.remove("kategoriActive");
    document.getElementById("filterDiminati").classList.add("kategoriInActive");
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
    dispatch(
      getProductByIdSeller({ idUser: user.id, minat: "", terjual: "t" })
    );
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-3">
          <Col>
            <h4 className="fw-bold">Daftar Jual Saya</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3} className="infoPenjual">
              {user === null ? (
                <></>
              ) : (
                <>
                  {user.gambar === null ? (
                    <img src={User} className="image-profile" alt="" />
                  ) : (
                    <img src={user.gambar} alt="" className="image-profile" />
                  )}
                  <div>
                    <h5 className="my-auto">{user.nama}</h5>
                    <p className="my-auto">{user.kota}</p>
                  </div>
                </>
              )}
              <Button
                type="button"
                className="btn-block btnOutlineSmall me-2 ms-auto"
                onClick={() => navigate("/profile")}
              >
                Edit
              </Button>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={12} xs={12}>
            <div className="boxShadow mt-4">
              <h5>Kategori</h5>
              <Table style={{ color: "grey" }}>
                <thead>
                  <tr
                    style={{ height: "50px" }}
                    className="kategoriActive"
                    id="filterTersedia"
                    onClick={filterTersedia}
                  >
                    <td>
                      <i className="bi bi-box me-2"></i>Semua Produk
                      <i className="bi bi-chevron-right float-end"></i>
                    </td>
                  </tr>

                  <tr
                    style={{ height: "50px" }}
                    className="kategoriInActive"
                    id="filterDiminati"
                    onClick={filterDiminati}
                  >
                    <td>
                      <i className="bi bi-heart me-2"></i>Diminati
                      <i className="bi bi-chevron-right float-end"></i>
                    </td>
                  </tr>
                  <tr
                    style={{ height: "50px" }}
                    className="kategoriInActive"
                    id="filterTerjual"
                    onClick={filterTerjual}
                  >
                    <td>
                      <i className="bi bi-currency-dollar me-2"></i>Terjual
                      <i className="bi bi-chevron-right float-end"></i>
                    </td>
                  </tr>
                </thead>
              </Table>
            </div>
          </Col>
          <Col lg={9} md={12} xs={12}>
            <Row className="mt-4">
              <Col lg={4} md={4} xs={6} className="mb-4">
                <Link to="/tambah-produk">
                  <img src={AddProduct} className="imgBtnAdd" alt="" />
                </Link>
              </Col>
              {product.length === 0 || product.length === undefined ? (
                <></>
              ) : (
                product.map((product) => (
                  <Col key={product.id} lg={4} md={4} xs={6} className="mb-4">
                    <Link to={`/preview/${product.id}`}>
                      <Card
                        onClick={() => handleSubmit()}
                        className="card-product"
                      >
                        <Card.Img
                          variant="top"
                          src={product.productpics[0].gambar}
                          className="imgProductLarge"
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ fontSize: "14px", height: "12px" }}
                          >
                            {product.nama}
                          </Card.Title>
                          <Card.Text
                            style={{ fontSize: "10px", height: "15px" }}
                          >
                            {product.kategori}
                          </Card.Text>
                          <Card.Text
                            style={{ fontSize: "14px", height: "15px" }}
                          >
                            <CurrencyFormat
                              value={product.harga}
                              displayType={"text"}
                              thousandSeparator={"."}
                              decimalSeparator={","}
                              prefix={"Rp. "}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DaftarJual;
