import React from "react";

// import from dependencies/ packages
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import ToggleColorModeProvider from "./utils/ToggleColorMode";

// import from files
import App from "./components/App";
import store from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <Router>
        <App />
      </Router>
    </ToggleColorModeProvider>
  </Provider>
);
