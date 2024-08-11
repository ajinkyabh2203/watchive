import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { styles } from "./styles";
import { createTheme } from "@mui/system";
import { Navbar, Movies, MovieInfo, Artists, Profile } from "./";

const App = () => {
  const { RootContainer, Toolbar, Content } = styles;

  return (
    <RootContainer>
      <CssBaseline />
      <Navbar />
      <Content>
        <Toolbar />
        <Routes>
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/artists/:id" element={<Artists />} />
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </RootContainer>
  );
};

export default App;
