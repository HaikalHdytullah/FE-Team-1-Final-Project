import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiPlus, FiChevronDown } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { addProduct } from "../redux/actions/productsActions";

import "../css/addProduct.css";

import UploadImage from "../img/uploadImage.png";

const InfoProduk = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  // const { previewProduct } = useSelector((state) => state.product);

  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar1, setGambar1] = useState("");
  const [gambar2, setGambar2] = useState("");
  const [gambar3, setGambar3] = useState("");
  const [gambar4, setGambar4] = useState("");

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

  const imgTemp = [];

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

    dispatch(
      addProduct({
        idUser: 2,
        nama,
        harga,
        kategori,
        deskripsi,
        gambar: [gambar1, gambar2, gambar3, gambar4],
      })
    );
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={10} className="mx-auto">
          <Row className="gx-5">
            <Col sm={2} className="text-center">
              <Link to="/">
                <FiArrowLeft size={25} />
              </Link>
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
                    <input
                      className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
                      type="number"
                      placeholder="Rp 0,00"
                      onChange={(e) => setHarga(e.target.value)}
                      value={harga}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block">Category</label>
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
                        <option value="Hobi">Hobi</option>
                        <option value="Kendaraan">Kendaraan</option>
                        <option value="Baju">Baju</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Kesehatan">Kesehatan</option>
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
                        <img
                          id="img-preview1"
                          className="display-none image-preview m-2"
                          src={UploadImage}
                          alt=""
                        />
                      </label>
                      <input
                        id="file-input1"
                        name="gambar1"
                        type="file"
                        onChange={imgPreview1}
                        required
                      />

                      {gambar1 !== "" ? (
                        <>
                          <label htmlFor="file-input2" id="preview">
                            <img
                              id="img-preview2"
                              className="display-none image-preview m-2"
                              src={UploadImage}
                              alt=""
                            />
                          </label>
                          <input
                            id="file-input2"
                            name="gambar2"
                            type="file"
                            onChange={imgPreview2}
                            required
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {gambar2 !== "" ? (
                        <>
                          <label htmlFor="file-input3" id="preview">
                            <img
                              id="img-preview3"
                              className="display-none image-preview m-2"
                              src={UploadImage}
                              alt=""
                            />
                          </label>
                          <input
                            id="file-input3"
                            name="gambar3"
                            type="file"
                            onChange={imgPreview3}
                            required
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {gambar3 !== "" ? (
                        <>
                          <label htmlFor="file-input4" id="preview">
                            <img
                              id="img-preview4"
                              className="display-none image-preview m-2"
                              src={UploadImage}
                              alt=""
                            />
                          </label>
                          <input
                            id="file-input4"
                            name="gambar4"
                            type="file"
                            onChange={imgPreview4}
                            required
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04  py-3 font-medium">
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      className="sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white"
                    >
                      Terbitkan
                    </button>
                  </div>
                </div>
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
