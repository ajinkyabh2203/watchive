import { styled } from "@mui/system";
import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton as MuiIconButton,
} from "@mui/material";

const AppBar = styled(MuiAppBar)({
  position: "fixed",
});

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "240px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    flexWrap: "wrap",
  },
}));

const MenuButton = styled(MuiIconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const styles = {
  AppBar,
  Toolbar,
  MenuButton,
};
