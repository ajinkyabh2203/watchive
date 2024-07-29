import React from "react";
import { Grow, Tooltip, Rating } from "@mui/material";
import { styles } from "./styles";
const Movie = ({ movie, i }) => {
  console.log(movie, i);
  const { Grid, Typography, Link, Image } = styles;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link to={`/movie/${movie.id}`}>
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie.title}
          />
          <Typography variant="h5">{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
