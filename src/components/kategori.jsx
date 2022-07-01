import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productsActions";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import "../css/kategori.css";

function Kategori() {
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.product);

  if (status !== "GET_ALL" && product.length === 0) {
    dispatch(getAllProducts());
  }

  return (
    <Container fixed>
      <Typography variant="h6" sx={{ marginTop: 5 }}>
        Telusuri Kategori
      </Typography>
      <Box sx={{ mx: "auto", marginTop: 1 }}>
        <Stack spacing={4} direction="row">
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            className="kategory-active btn-kategory"
          >
            Semua
          </Button>
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            className="kategory-deactive btn-kategory"
          >
            Hobi
          </Button>
          <Button
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            className="kategory-deactive btn-kategory"
          >
            Kendaraan
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
          >
            Baju
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
          >
            Elektronik
          </Button>
          <Button
            className="kategory-deactive btn-kategory"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
          >
            Kesehatan
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Kategori;
