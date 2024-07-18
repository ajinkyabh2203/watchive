import { styled } from "@mui/system";
import { Link as muiLink } from "react-router-dom";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

const Link = styled(muiLink)({
  display: "flex",
  justifyContent: "center",
  padding: "10% 0",
});

const Image = styled("img")({
  width: "70%",
});

const ItemLink = styled(muiLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

const GenreImage = styled("img")(({ theme }) => ({
  filter: theme.palette.mode === "dark" ? "dark" : "invert(0)",
}));

export const styles = {
  Link,
  Image,
  ItemLink,
  GenreImage,
};
