import { styled } from "@mui/system";
import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton as MuiIconButton,
  Drawer as MuiDrawer,
} from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
}));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "240px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    flexWrap: "wrap",
  },
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
}));

const MenuButton = styled(MuiIconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
}));

const Nav = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  backgroundColor: theme.palette.mode === "light" ? "#001F6B" : "#272727",
  "& .MuiPaper-root": {
    width: drawerWidth,
  },
}));

export const styles = {
  AppBar,
  Toolbar,
  MenuButton,
  Nav,
  Drawer,
};
