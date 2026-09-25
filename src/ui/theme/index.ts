"use client";

import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./palette";
import { components } from "./components";

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: { palette: lightPalette },
  },
  components: components,
});
