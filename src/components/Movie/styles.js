import { styled } from "@mui/material/styles";
import { Link as domlink } from "react-router-dom";
import { Grid as muiGrid, Typography as muiTypo } from "@mui/material";
import { display } from "@mui/system";

const Grid = styled(muiGrid)({
  padding: "10px",
});

const Link = styled(domlink)(({ theme }) => ({
  alignItems: "center",
  fontWeight: "bolder",
  textDecoration: "none",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));

const Image = styled("img")({
  borderRadius: "20px",
  height: "300px",
  marginBottom: "10px",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Typography = styled(muiTypo)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: "ellipsis",
  width: "230px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  marginTop: "10px",
  marginBottom: 0,
  textAlign: "center",
}));

export const styles = {
  Grid,
  Typography,
  Link,
  Image,
};
