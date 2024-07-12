import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/system";
import { styles } from "./styles";

const blueLogo =
  "https://fontmeme.com/permalink/240712/b44272d227a12e343f60ec9843576c83.png";
const redLogo =
  "https://fontmeme.com/permalink/240712/8ed390a239de5863191991c591747799.png";

// #CADCFC : use lighter version of this color for website background in light mode

const categories = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Top rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const demoCategories = [
  {
    label: "Comedy",
    value: "comedy",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Animation",
    value: "animation",
  },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const { Link, Image, ItemLink, GenreImage } = styles;

  return (
    <>
      <Link to="/">
        <Image
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="watchive logo"
        ></Image>
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <ItemLink key={value} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <GenreImage src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </ItemLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <ItemLink key={value} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <GenreImage src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </ItemLink>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
