import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#939ed5",
      main: "#7986cb",
      dark: "#545d8e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffd699",
      main: "#ffcc80",
      dark: "#b28e59",
      contrastText: "#000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
