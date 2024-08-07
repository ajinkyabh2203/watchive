import { margin, styled } from "@mui/system";
import { Grid as muiGrid } from "@mui/material";
import { Modal as muiModal } from "@mui/material";
import { Link as muiLink } from "react-router-dom";

const Grid1 = styled(muiGrid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  margin: "10px 0 !important",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));

const Poster = styled("img")(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: "0.5em 1em 1em rgb(64,64,70) ",
  width: "80%",
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    width: "50%",
    height: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    width: "100%",
    height: "350px",
    marginBottom: "30px",
  },
}));

const GenresContainer = styled(muiGrid)({
  margin: "10px 0 !important",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

const GenresImages = styled("img")(({ theme }) => ({
  filter: theme.palette.mode === "dark" && "invert(1)",
  marginRight: "10px",
}));

const Links = styled(muiLink)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
  },
}));

const CastImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "7em",
  height: "8em",
  objectFit: "cover",
  borderRadius: "10px",
}));

const ButtonsContainer = styled(muiGrid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ButtonsContainerGrid = styled(muiGrid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Modal = styled(muiModal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Video = styled("iframe")(({ theme }) => ({
  width: "50%",
  height: "50%",
  border: 0,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "90%",
  },
}));

export const styles = {
  Grid1,
  Poster,
  GenresContainer,
  GenresImages,
  Links,
  CastImage,
  ButtonsContainer,
  ButtonsContainerGrid,
  Modal,
  Video,
};
