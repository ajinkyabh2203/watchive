import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  CircularProgress,
  Rating,
  ButtonGroup,
} from "@mui/material";

import {
  Movie as MovieIcon,
  Theaters,
  Language,
  ArrowBack,
} from "@mui/icons-material";

import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
import genreIcons from "../../assets/genres";
import MovieList from "../MovieList/MovieList";

import { selectGenreOrCategory } from "../../features/currentGenre";

const MovieInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetMovieQuery(id);

  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({
      list: "/recommendations",
      movie_id: id,
    });
  const {
    Grid1,
    Poster,
    GenresContainer,
    GenresImages,
    Links,
    CastImage,
    ButtonsContainer,
    ButtonsContainerGrid,
    Modal,
    Video,
  } = styles;
  const [open, setOpen] = useState(false);

  console.log(recommendations);

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
  console.log(data);

  return (
    <Grid1 container>
      <Grid
        item
        sm={12}
        lg={4}
        align="center"
        style={{ display: "flex", marginBottom: "40px" }}
      >
        <Poster
          src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}{" "}
        </Typography>
        <Grid1 item>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average}/10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min | Language: {data?.spoken_languages[0].name}
          </Typography>
        </Grid1>
        <GenresContainer item>
          {data?.genres?.map((genre, i) => (
            <Links
              key={genre.name}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <GenresImages
                src={genreIcons[genre.name.toLowerCase()]}
                height={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Links>
          ))}
        </GenresContainer>
        <Typography variant="h5" gutterBottom style={{ marginTop: "10px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data?.credits?.cast
              ?.map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      key={i}
                      item
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/artists/${character.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CastImage
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                      />
                      <Typography color="textPrimary">
                        {character?.name}
                      </Typography>
                      <Typography color="textSecondary">
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: "2rem" }}>
          <ButtonsContainer>
            <ButtonsContainerGrid item xs={12} sm={6}>
              <ButtonGroup size="medium" variant="outlined">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}
                >
                  Trailer
                </Button>
                <Button
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}
                >
                  <Typography
                    style={{ textDecoration: "none" }}
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </ButtonsContainerGrid>
          </ButtonsContainer>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>
      <Modal closeAfterTransition open={!!open} onClose={() => setOpen(false)}>
        {data?.videos?.results?.length > 0 ? (
          <Video
            autoPlay
            title="Trailer"
            src={`https://www.youtube.com/embed/${data?.videos?.results[0]?.key}`}
            allow="autoplay"
          />
        ) : (
          <></> // Empty React fragment to ensure a valid child is always passed
        )}
      </Modal>
    </Grid1>
  );
};

export default MovieInfo;
