import React from "react";
import { Typography, Box } from "@mui/material";
import { Movie } from "..";

const RatedCards = ({ title, data }) => {
  return (
    <div>
      <Box>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {data?.results.map((movie, i) => (
            <Movie key={movie.id} movie={movie} i={i} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default RatedCards;
