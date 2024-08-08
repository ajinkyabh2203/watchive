import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../../features/currentGenre";
import { styles } from "./styles";

const Search = () => {
  const { SearchContainer, customInputStyles } = styles;
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== "/") return null;

  return (
    <SearchContainer>
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setquery(e.target.value)}
        variant="standard"
        sx={customInputStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default Search;
