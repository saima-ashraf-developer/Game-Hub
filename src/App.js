import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Homepage from "./components/homepage";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#fdd835",
        main: "#f9a825  ",
        dark: "#f57f17",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
