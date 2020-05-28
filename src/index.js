import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes";

import App from "./App";

render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
