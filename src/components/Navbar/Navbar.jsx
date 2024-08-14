import React, { useState, useContext } from "react";

import { useMediaQuery, IconButton } from "@mui/material";
import { Menu, Brightness7, Brightness4 } from "@mui/icons-material";
import { styles } from "./styles";
import { useTheme } from "@mui/system";

import { Sidebar, Search } from "..";
import { ColorModeContext } from "../../utils/ToggleColorMode";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { AppBar, Toolbar, MenuButton, Nav, Drawer } = styles;
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <AppBar>
        <Toolbar>
          {isMobile && (
            <MenuButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </MenuButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}

          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <Nav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
