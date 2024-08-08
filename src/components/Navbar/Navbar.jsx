import React, { useEffect, useState, useContext } from "react";

import { createSearchParams, Link } from "react-router-dom";
import { Button, useMediaQuery, Avatar, IconButton } from "@mui/material";
import {
  Menu,
  Brightness7,
  Brightness4,
  AccountCircle,
} from "@mui/icons-material";
import { styles } from "./styles";
import { useTheme } from "@mui/system";
import { fetchToken, craeteSessionId, moviesApi } from "../../utils";
import { setUser, userSelector } from "../../features/auth";
import { Sidebar, Search } from "..";
import { useDispatch, useSelector } from "react-redux";
import { ColorModeContext } from "../../utils/ToggleColorMode";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { AppBar, Toolbar, MenuButton, Nav, Drawer, LinkButton } = styles;
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const dispatch = useDispatch();

  const colorMode = useContext(ColorModeContext);
  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");
  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await craeteSessionId();

          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, [token]);

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
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton
                color="inherit"
                component={Link}
                to={`./profile/${user.id}`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user"
                />
              </LinkButton>
            )}
          </div>
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
