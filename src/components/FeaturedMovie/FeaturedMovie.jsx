import React from "react";
import { Typography, Box, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;
  const {
    FeaturedCardContainer,
    StyledCard,
    StyledCardMedia,
    StyledCardContent,
  } = styles;

  return (
    <FeaturedCardContainer component={Link} to={`/movie/${movie.id}`}>
      <StyledCard>
        <StyledCardMedia
          component="img"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px">
          <StyledCardContent>
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </StyledCardContent>
        </Box>
      </StyledCard>
    </FeaturedCardContainer>
  );
};

export default FeaturedMovie;
