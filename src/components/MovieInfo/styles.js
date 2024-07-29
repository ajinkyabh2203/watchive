import { margin, styled } from "@mui/system";
import { Grid as muiGrid } from "@mui/material";

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
  boxShadow: "0.5em 1em 1em black rgb(64,64,70) ",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    width: "100%",
    height: "350px",
    marginBottom: "30px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    width: "50%",
    height: "350px",
  },
}));

export const styles = {
  Grid1,
  Poster,
};
