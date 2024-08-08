import React from "react";
// import ReactDOM from "react-dom"

// import from dependencies/ packages
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import "./index.css";

// import from files
import App from "./components/App";
import store from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);
const theme = createTheme({});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
