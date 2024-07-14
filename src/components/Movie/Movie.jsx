import React from "react";
import { Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./styles";
const Movie = ({ movie, i }) => {
  const { Grid, Typography } = styles;
  console.log(movie, i);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Typography variant="h5">{movie.title}</Typography>
    </Grid>
  );
};

export default Movie;
