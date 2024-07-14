import { styled } from "@mui/material/styles";
import { Grid as muiGrid } from "@mui/material";

const Grid = styled(muiGrid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  overflow: "auto",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const styles = {
  Grid,
};
