import React from "react";
import { FiArrowLeft, FiPlus, FiChevronDown } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";

const InfoProduk = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={10} className="mx-auto">
          <Row className="gx-5">
            <Col sm={2} className="text-center">
              <FiArrowLeft size={25} />
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
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block">Harga Produk</label>
                    <input
                      className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
                      type="number"
                      placeholder="Rp 0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block">Category</label>
                    <label className="relative block">
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                        <FiChevronDown />
                      </span>
                      <select className=" w-full appearance-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 pr-10 pl-3 text-neutral-03 focus:outline-none sm:text-sm">
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
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block">Foto Produk</label>
                    <label
                      className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-neutral-02 text-2xl text-neutral-03"
                      htmlFor="file"
                    >
                      <input
                        className="hidden h-full w-full"
                        type="file"
                        id="file"
                        accept="image/png, image/jpeg"
                        multiple
                      />
                      <FiPlus />
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <button className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04  py-3 font-medium">
                      Preview
                    </button>
                    <button className="sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white">
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
