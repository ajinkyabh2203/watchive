import React from "react";

import { Link } from "react-router-dom";
import { Button, useMediaQuery, Avatar, IconButton } from "@mui/material";
import {
  Menu,
  Brightness7,
  Brightness4,
  AccountCircle,
} from "@mui/icons-material";
import { styles } from "./styles";
import { useTheme } from "@mui/system";

const Navbar = () => {
  const { AppBar, Toolbar, MenuButton } = styles;
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar>
        <Toolbar>
          {isMobile && (
            <MenuButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
            >
              <Menu />
            </MenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={"./profile/:id"}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
