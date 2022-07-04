import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductByKategory,
} from "../redux/actions/productsActions";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import "../css/kategori.css";

function Kategori() {
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.product);

  if (status === "" && product.length === 0) {
    dispatch(getAllProducts());
  }

  let statusFilter = "";
  const filterAll = (event) => {
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    dispatch(getAllProducts());
  };

  const filterByHobby = (event) => {
    statusFilter = "Hobi";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    dispatch(getProductByKategory(statusFilter));
  };
  const filterByVehicle = (event) => {
    statusFilter = "Kendaraan";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    dispatch(getProductByKategory(statusFilter));
  };
  const filterByCLothe = (event) => {
    statusFilter = "Baju";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    dispatch(getProductByKategory(statusFilter));
  };
  const filterByElectronic = (event) => {
    statusFilter = "Elektronik";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    dispatch(getProductByKategory(statusFilter));
  };
  const filterByHealth = (event) => {
    statusFilter = "Kesehatan";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    dispatch(getProductByKategory(statusFilter));
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ marginTop: 5 }}>
        Telusuri Kategori
      </Typography>
      <Box sx={{ mx: "auto", marginTop: 1 }}>
        <Stack spacing={4} direction="row">
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            id="filter-all"
            className="kategory-active btn-kategory"
            onClick={filterAll}
          >
            Semua
          </Button>
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            id="filter-hobi"
            className="kategory-deactive btn-kategory"
            onClick={filterByHobby}
          >
            Hobi
          </Button>
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            id="filter-kendaraan"
            className="kategory-deactive btn-kategory"
            onClick={filterByVehicle}
          >
            Kendaraan
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            id="filter-baju"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            onClick={filterByCLothe}
          >
            Baju
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            id="filter-elektronik"
            onClick={filterByElectronic}
          >
            Elektronik
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            sx={{ borderRadius: "10px" }}
            id="filter-kesehatan"
            startIcon={<SearchIcon />}
            onClick={filterByHealth}
          >
            Kesehatan
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Kategori;
