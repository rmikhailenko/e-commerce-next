"use client";

import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./palette";
import { components } from "./components";
import { typography } from "./typography";

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: { palette: lightPalette },
  },
  components: components,
  typography: typography,
});
