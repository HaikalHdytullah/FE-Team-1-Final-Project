import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FiArrowLeft, FiChevronDown} from "react-icons/fi";
import {Container, Row, Col, Modal, Button, Carousel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import CurrencyFormat from "react-currency-format";

import Header from "./Header";

import {addProduct, previewImg, getAllProducts, clearProduct} from "../redux/actions/productsActions";

import "../css/addProduct.css";

import UploadImage from "../img/uploadImage.png";

const InfoProduk = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, user} = useSelector((state) => state.auth);
    const {previewProduct, status} = useSelector((state) => state.product);

    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar1, setGambar1] = useState("");
    const [gambar2, setGambar2] = useState("");
    const [gambar3, setGambar3] = useState("");
    const [gambar4, setGambar4] = useState("");
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const imgTemp = [];

    useEffect(() => {
        if (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: error,
                confirmButtonText: "ok",
            });
        }
    }, [error]);

    const imgPreview1 = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById("img-preview1").src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            setGambar1(e.target.files[0]);
        } else {
            document.getElementById("img-preview1").src = UploadImage;
            setGambar1("");
        }
    };
    const imgPreview2 = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById("img-preview2").src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            setGambar2(e.target.files[0]);
        } else {
            document.getElementById("img-preview2").src = UploadImage;
            setGambar2("");
        }
    };
    const imgPreview3 = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById("img-preview3").src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            setGambar3(e.target.files[0]);
        } else {
            document.getElementById("img-preview3").src = UploadImage;
            setGambar3("");
        }
    };
    const imgPreview4 = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById("img-preview4").src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            setGambar4(e.target.files[0]);
        } else {
            document.getElementById("img-preview4").src = UploadImage;
            setGambar4("");
        }
    };

    const handleSubmit = async (e) => {
        if (nama === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Nama produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (harga === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Harga produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (kategori === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Kategori produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (deskripsi === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Deskripsi produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (gambar1 === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Gambar produk harus diisi minimal 1 gambar",
                confirmButtonText: "Ok",
            });
            return;
        }
        Swal.fire({
            title: "Loading",
            text: "Permintaan anda sedang diproses, harap tunggu sebentar",
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
        let harga_new = parseInt(harga.replace(/[^0-9]/g, ""));
        dispatch(
            addProduct({
                nama,
                harga_new,
                kategori,
                deskripsi,
                gambar: [gambar1, gambar2, gambar3, gambar4],
            })
        );
    };

    if (status === "Created") {
        dispatch(getAllProducts());
        dispatch(clearProduct());
        return navigate("/");
    }

    function handleShow() {
        if (nama === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Nama produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (harga === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Harga produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (kategori === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Kategori produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (deskripsi === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Deskripsi produk harus diisi",
                confirmButtonText: "Ok",
            });
            return;
        }
        if (gambar1 === "") {
            Swal.fire({
                title: "Warning",
                icon: "warning",
                text: "Gambar produk harus diisi minimal 1 gambar",
                confirmButtonText: "Ok",
            });
            return;
        } else {
            imgTemp.splice(0, imgTemp.length);
            imgTemp.push(document.getElementById("img-preview1").src);
            if (gambar1 !== "" && document.getElementById("file-input2").value !== "") {
                imgTemp.push(document.getElementById("img-preview2").src);
            }
            if (gambar2 !== "" && document.getElementById("file-input3").value !== "") {
                imgTemp.push(document.getElementById("img-preview3").src);
            }
            if (gambar3 !== "" && document.getElementById("file-input4").value !== "") {
                imgTemp.push(document.getElementById("img-preview4").src);
            }
            dispatch(previewImg(imgTemp));
            if (previewProduct !== []) {
                setFullscreen(true);
                setShow(true);
            }
        }
    }

    function handleClose() {
        setFullscreen(false);
        setShow(false);
    }

    const handleBack = async () => {
        dispatch(clearProduct());
        return navigate("/");
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col sm={10} className="mx-auto">
                    <Row className="gx-5">
                        <Col sm={2} className="text-center">
                            <Button className="btn-back" onClick={handleBack}>
                                <FiArrowLeft size={25} />
                            </Button>
                        </Col>
                        <Col sm={8}>
                            <Row>
                                <div className="mt-1  w-full  space-y-4 sm:mx-auto sm:mt-10">
                                    <div className="space-y-2">
                                        <label className="block">Nama Produk</label>
                                        <input
                                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
                                            type="text"
                                            placeholder="Nama Produk"
                                            onChange={(e) => setNama(e.target.value)}
                                            value={nama}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block">Harga Produk</label>
                                        <CurrencyFormat
                                            className="form-control w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
                                            onChange={(e) => setHarga(e.target.value)}
                                            value={harga}
                                            thousandSeparator={"."}
                                            decimalSeparator={","}
                                            prefix={"Rp. "}
                                            placeholder="Rp 0.00"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block">Kategori</label>
                                        <label className="relative block">
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                                                <FiChevronDown />
                                            </span>
                                            <select
                                                className=" w-full appearance-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 pr-10 pl-3 text-neutral-03 focus:outline-none sm:text-sm"
                                                required
                                                onChange={(e) => setKategori(e.target.value)}
                                                value={kategori}
                                            >
                                                <option value="">Pilih Kategori</option>
                                                <option value="hobi">Hobi</option>
                                                <option value="kendaraan">Kendaraan</option>
                                                <option value="baju">Baju</option>
                                                <option value="elektronik">Elektronik</option>
                                                <option value="kesehatan">Kesehatan</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block">Deskripsi</label>
                                        <textarea
                                            id=""
                                            name=""
                                            rows="2"
                                            className="w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none"
                                            placeholder="Contoh: Jalan Ikan Hiu 33"
                                            required
                                            onChange={(e) => setDeskripsi(e.target.value)}
                                            value={deskripsi}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block">Foto Produk</label>
                                        <div className="image-upload">
                                            <label htmlFor="file-input1" id="preview">
                                                <img id="img-preview1" className="display-none image-preview m-2" src={UploadImage} alt="" />
                                            </label>
                                            <input id="file-input1" name="gambar1" type="file" onChange={imgPreview1} required />

                                            {gambar1 !== "" ? (
                                                <>
                                                    <label htmlFor="file-input2" id="preview">
                                                        <img id="img-preview2" className="display-none image-preview m-2" src={UploadImage} alt="" />
                                                    </label>
                                                    <input id="file-input2" name="gambar2" type="file" onChange={imgPreview2} required />
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            {gambar2 !== "" ? (
                                                <>
                                                    <label htmlFor="file-input3" id="preview">
                                                        <img id="img-preview3" className="display-none image-preview m-2" src={UploadImage} alt="" />
                                                    </label>
                                                    <input id="file-input3" name="gambar3" type="file" onChange={imgPreview3} required />
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            {gambar3 !== "" ? (
                                                <>
                                                    <label htmlFor="file-input4" id="preview">
                                                        <img id="img-preview4" className="display-none image-preview m-2" src={UploadImage} alt="" />
                                                    </label>
                                                    <input id="file-input4" name="gambar4" type="file" onChange={imgPreview4} required />
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button onClick={() => handleShow()} className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04  py-3 font-medium">
                                            Preview
                                        </button>
                                        <button type="button" onClick={() => handleSubmit()} className="sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white">
                                            Terbitkan
                                        </button>
                                    </div>
                                </div>
                                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                    <Modal.Body>
                                        <Header></Header>
                                        <Container className="mt-5">
                                            <Row className="justify-content-md-center">
                                                <Col lg={6} md={7} xs={11}>
                                                    <Carousel variant="dark">
                                                        {previewProduct.map((item, index) => {
                                                            return (
                                                                <Carousel.Item key={index}>
                                                                    <img className="d-block w-100 h-100 carousel-img" src={item} alt="First slide" />
                                                                </Carousel.Item>
                                                            );
                                                        })}
                                                    </Carousel>

                                                    <Row className="mx-1 mt-4 mb-4 shadow-sm" style={{borderRadius: "20px"}}>
                                                        <p className="fw-bold text-family ps-3 pt-3 pb-3">Deskripsi</p>
                                                        <p className="text-color ps-3 lh-base pb-3 text-justify">{deskripsi}</p>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={5} xs={11}>
                                                    <Row className="shadow-sm" style={{borderRadius: "20px"}}>
                                                        <p className="fw-bold text-family ps-4 fs-4 pt-3">{nama}</p>
                                                        <p className="text-color ps-4 pt-1">{kategori}</p>
                                                        <p className="fw-bold text-family ps-4 pt-3">Rp {harga}</p>
                                                        <div className="d-grid mt-4 gap-3">
                                                            <Button className="button-add fw-semibold text-white" style={{backgroundColor: "#7126B5"}} onClick={() => handleSubmit()}>
                                                                Terbitkan
                                                            </Button>
                                                            <Button className="button-edit fw-semibold mb-4 text-black" style={{backgroundColor: "white"}} onClick={handleClose}>
                                                                Edit
                                                            </Button>
                                                        </div>
                                                    </Row>
                                                    <Row className="mt-4 pt-3 shadow-sm" style={{borderRadius: "20px"}}>
                                                        {user ? (
                                                            <>
                                                                <Col lg={2} sm={3} className="me-3">
                                                                    <div className="layout-foto">
                                                                        <img className="foto" src={user.gambar} alt="Foto Profile" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={9} sm={10}>
                                                                    <p className="fw-bold text-family ps-3 fs-6">{user.nama}</p>
                                                                    <p className="text-color ps-3 fs-6 pt-2 pb-2" style={{marginTop: "-5px"}}>
                                                                        {user.kota}
                                                                    </p>
                                                                </Col>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                </Modal>
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default InfoProduk;
