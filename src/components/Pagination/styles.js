import { styled } from "@mui/system";
import { Button as muiButton, Typography } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Button = styled(muiButton)(({ theme }) => ({
  margin: "30px 2px",
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
  color: "white",
}));

const PageNumber = styled(Typography)(({ theme }) => ({
  margin: "0 20px !important",
  color: theme.palette.text.primary,
}));

export const styles = { Container, Button, PageNumber };
