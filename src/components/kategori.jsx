import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography, Grid } from "@mui/material";

function Kategori() {
  return (
    <Container fixed>
      <Typography variant="h6" sx={{ marginTop: 5 }}>
        Telusuri Kategori
      </Typography>
      <Box sx={{ mx: "auto", marginTop: 1 }}>
        <Stack spacing={4} direction="row">
          <Button
            variant="contained"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            color="secondary"
          >
            All
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            color="secondary"
          >
            Fashion
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            color="secondary"
          >
            Productivity
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            color="secondary"
          >
            Electronic
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "10px" }}
            startIcon={<SearchIcon />}
            color="secondary"
          >
            Transportation
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Kategori;
