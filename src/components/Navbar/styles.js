import { styled } from "@mui/system";
import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton as MuiIconButton,
  Drawer as MuiDrawer,
  Button,
} from "@mui/material";

const drawerWidth = 240;

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

const Nav = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  "& .MuiPaper-root": {
    width: drawerWidth,
  },
});

const LinkButton = styled(Button)({
  "&:hover": {
    color: "white !important",
    textDecoration: "none",
  },
});

export const styles = {
  AppBar,
  Toolbar,
  MenuButton,
  Nav,
  Drawer,
  LinkButton,
};
