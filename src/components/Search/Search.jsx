import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../../features/currentGenre";
import { styles } from "./styles";

const Search = () => {
  const { SearchContainer, customInputStyles } = styles;
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
    console.log("Search");
  };

  return (
    <SearchContainer>
      <TextField
        onKeyPress={handleKeyPress}
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
