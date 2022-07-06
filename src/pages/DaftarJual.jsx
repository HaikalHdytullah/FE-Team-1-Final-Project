import React, { useEffect, useState } from "react";
import "../css/DaftarJual/DaftarJual.css";
import SemuaProduk from "../components/DaftarJual/SemuaProduk";
import DiminatiNotFound from "../components/DaftarJual/DiminatiNotFound";
import TerjualNotFound from "../components/DaftarJual/TerjualNotFound";
import Diminati from "../components/DaftarJual/Diminati";
import Terjual from "../components/DaftarJual/Terjual";
import DaftarJualHeader from "../components/DaftarJual/DaftarJualHeader";
import SidebarDaftarJual from "../components/DaftarJual/SidebarDaftarJual";
import Header from "../components/Header";

function DaftarJual() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <DaftarJualHeader />
        <div className="row">
          <SidebarDaftarJual />
          <div className="col-lg-9">
            {/* <SemuaProduk/> */}
            {/* <DiminatiNotFound /> */}
            <TerjualNotFound />
            {/* <Diminati /> */}
            {/* <Terjual /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaftarJual;
