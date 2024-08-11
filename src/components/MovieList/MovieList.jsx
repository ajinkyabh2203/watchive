import React from "react";
import { styles } from "./styles";
import { Movie } from "..";

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const { Grid } = styles;
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <Grid>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
