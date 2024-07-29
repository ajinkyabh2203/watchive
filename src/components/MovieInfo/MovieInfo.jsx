import React from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonRoot,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";

import {
  Movie as MovieIcon,
  Theatres,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlines,
  Remove,
  ArrowBack,
} from "@mui/icons-material";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { useGetMovieQuery } from "../../services/TMDB";

const MovieInfo = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { Grid1, Poster } = styles;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong. Go back</Link>
      </Box>
    );
  }

  return (
    <Grid1 container>
      <Grid1 item sm={12} lg={4} align="center">
        <Poster
          src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid1>
    </Grid1>
  );
};

export default MovieInfo;
