import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import BackArrow from "../img/info-backarrow.png";
import UploadImage from "../img/uploadImage.png";
import { useNavigate } from "react-router-dom";
import "../css/addProduct.css";
import Swal from "sweetalert2";
import { updateInfoUsers } from "../redux/actions/authActions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [hp, setHp] = useState("");
  const [gambar, setGambar] = useState("");

  const imgPreview = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("img-preview1").src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      setGambar(e.target.files[0]);
    } else {
      document.getElementById("img-preview1").src = UploadImage;
      setGambar("");
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
    if (kota === "") {
      Swal.fire({
        title: "Warning",
        icon: "warning",
        text: "Harga produk harus diisi",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (alamat === "") {
      Swal.fire({
        title: "Warning",
        icon: "warning",
        text: "Kategori produk harus diisi",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (hp === "") {
      Swal.fire({
        title: "Warning",
        icon: "warning",
        text: "Deskripsi produk harus diisi",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (gambar === "") {
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
      updateInfoUsers({
        idUser: 1,
        nama,
        kota,
        alamat,
        hp,
        gambar,
      })
    );
  };

  return (
    <Container className="w-50 my-5 ">
      <div className="image-upload d-flex justify-content-center">
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
          onChange={imgPreview}
          required
        />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama*</Form.Label>
          <Form.Control
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Kota*</Form.Label>
          <Form.Control
            type="text"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
            placeholder="Kota"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Alamat*</Form.Label>
          <Form.Control
            as="textarea"
            row={2}
            placeholder="Contoh: Jl Ikan Hiu  No. 33"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>No Handphone*</Form.Label>
          <Form.Control
            type="text"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            placeholder="+62 *********"
          />
        </Form.Group>
        <div className="my-5">
          <Button
            variant="primary"
            onClick={() => handleSubmit()}
            type="submit"
            className="w-100"
          >
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default ProfileForm;
