import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import "../css/Preview.css";

import Jam from "../img/jam-image.png";
import Jam2 from "../img/jam2-image.png";
import Foto from "../img/profile-image.png";

const PreviewProduct = () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={10} md={12} sm={12} className="mx-auto">
                    <Row className="mt-4 gx-5 justify-content-center">
                        <Col sm={8}>
                            <Row>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Jam}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Jam2}
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Jam}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Jam2}
                                    alt="Four slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </Row>
                            <Row className="mt-4 mx-1 shadow-sm mb-4" style={{borderRadius: "20px"}}>
                                <p className="fw-bold text-family pt-3 ps-3">Deskripsi</p>
                                <p className="text-color ps-3 lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p className="text-color ps-3 lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row className="shadow-sm" style={{borderRadius: "20px"}}>
                                <p className="fw-bold text-family pt-3 ps-4 fs-4">Jam Tangan Casio</p>
                                <p className="text-color ps-4">Aksesoris</p>
                                <p className="fw-bold text-family ps-4">Rp 250.000</p>
                                <div className="d-grid gap-3 mt-4">
                                    <Button className="button-add fw-semibold text-white" style={{backgroundColor: "#7126B5"}}>
                                        Terbitkan
                                    </Button>
                                    <Button className="button-edit fw-semibold text-black" style={{backgroundColor: "white"}}>
                                        Edit
                                    </Button>
                                    <Button className="button-delete fw-semibold text-black mb-4" style={{backgroundColor: "white"}}>
                                        Delete
                                    </Button>
                                </div>
                            </Row>
                            <Row className="mt-4 shadow-sm pt-3" style={{borderRadius: "20px"}}>
                                    <Col lg={2} sm={3} className="me-3">
                                        <div className="layout-foto">
                                            <img className="foto" src={Foto}alt="Foto Profile"/>
                                        </div>
                                    </Col>
                                    <Col lg={9} sm={9}>
                                        <p className="fw-bold text-family ps-2 fs-6">Nama Penjual</p>
                                        <p className="text-color ps-2 fs-6" style={{marginTop:"-5px"}}>Kota</p>
                                    </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
        </>
    );
}

export default PreviewProduct;