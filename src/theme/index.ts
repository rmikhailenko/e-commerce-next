"use client";
import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "@/theme/palette";
import { navTypography } from "@/theme/typography";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-mui-color-scheme" },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography: {},
});

export default theme;
