import * as React from "react";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../css/kartu.css";

function Kategori() {
  return (
    <Container>
      <Typography gutterBottom variant="h6" component="div">
        Telusuri Kategori
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Electronic</Button>
        <Button variant="contained">Fashion</Button>
        <Button variant="text">Productivity</Button>
        <Button variant="text">Sport</Button>
        <Button variant="text">Home</Button>
      </Stack>
    </Container>
  );
}

export default Kategori;
