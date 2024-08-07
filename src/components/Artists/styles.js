import { styled } from "@mui/system";

const Image = styled("img")(({ theme }) => ({
  maxWidth: "90%",
  borderRadius: "20px",
  objectFit: "cover",
  boxShadow: "o.5em o.5em 1em",
}));

export const styles = {
  Image,
};
