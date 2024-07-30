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
import { useTheme } from "@mui/system";
import { styles } from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenre";

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

const blueLogo =
  "https://fontmeme.com/permalink/240712/b44272d227a12e343f60ec9843576c83.png";
const redLogo =
  "https://fontmeme.com/permalink/240712/8ed390a239de5863191991c591747799.png";

// #CADCFC : use lighter version of this color for website background in light mode

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const theme = useTheme();
  const { Link, Image, ItemLink, GenreImage } = styles;
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

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
            <ListItemButton
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <GenreImage src={genreIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ItemLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <ItemLink key={name} to="/">
              <ListItemButton
                onClick={() => dispatch(selectGenreOrCategory(id))}
              >
                <ListItemIcon>
                  <GenreImage
                    src={genreIcons[name.toLowerCase()]}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ItemLink>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
