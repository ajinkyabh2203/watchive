import { styled } from "@mui/material/styles";
import { Button as muiButton, Typography } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Button = styled(muiButton)({
  margin: "30px 2px",
});

const PageNumber = styled(Typography)(({ theme }) => ({
  margin: "0 20px !important",
  color: theme.palette.text.primary,
}));

export const styles = { Container, Button, PageNumber };
