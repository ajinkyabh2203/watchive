import React from "react";
import { styles } from "./styles";
import { Movie } from "..";

const MovieList = ({ movies, numberOfMovies }) => {
  const { Grid } = styles;
  return (
    <Grid>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
