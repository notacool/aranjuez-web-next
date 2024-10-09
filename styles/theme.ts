import { createTheme } from "@mui/material/styles";
import { Button } from "./button";
import { Typography } from "./typography";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5C4835",
    },
    secondary: {
      main: "#D5D5D5",
    },
    neutral: {
      main: "#FDFAF8",
      contrastText: "#95785C",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  components: {
    MuiButton: Button,
    MuiTypography: Typography,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}
