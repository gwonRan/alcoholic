import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/themed-components";

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}></ThemeProvider>
  </>,
  document.getElementById("root")
);
