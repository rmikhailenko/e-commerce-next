"use client";
import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "@/theme/palette";
import { components } from "@/theme/components";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-mui-color-scheme" },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  components,
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    fontSize: 14,
    body1: {
      fontSize: "0.875rem",
      color: "var(--mui-palette-text-primary)",
    },
    button: {
      textTransform: "none",
      // color: "var(--mui-palette-text-primary)",
    },
  },
});

export default theme;
