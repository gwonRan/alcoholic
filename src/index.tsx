import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/themed-components";
import Routes from "./Routes";

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
