import React from "react";
import { FiPlus } from "react-icons/fi";
import CardDaftarJual from "./CardDaftarJual";

function SemuaProduk() {
  return (
    <div className="row">
      <section className="card-tambah-produk col-lg-4 col-md-6 col-sm-6 mt-2">
        <div className="card">
          <div className="content d-flex ">
            <FiPlus
              className="plus mb-2 text-center"
              size={20}
              style={{ color: "#8A8A8A" }}
            />
            <p className="text-center" style={{ color: "#8A8A8A" }}>
              Tambah Produk
            </p>
          </div>
        </div>
      </section>
      <CardDaftarJual />
      <CardDaftarJual />
      <CardDaftarJual />
      <CardDaftarJual />
      <CardDaftarJual />
      <CardDaftarJual />
    </div>
  );
}

export default SemuaProduk;
