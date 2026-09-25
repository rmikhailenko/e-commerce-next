import { alpha, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    dark: string;
    grey: string;
  }

  interface TypeText {
    brand: string;
    white: string;
    grey: string;
  }
}

export const lightPalette: PaletteOptions = {
  mode: "light",

  primary: {
    main: "#07BE8A",
    light: alpha("#07BE8A", 0.1),
    dark: "#059669",
    contrastText: "#0f172a",
  },
  background: {
    default: "#ffffff",
    dark: "#172023",
    grey: alpha("#ffffff", 0.05),
  },
  text: {
    primary: "#172023",
    secondary: alpha("#172023", 0.5),
    brand: "#07BE8A",
    white: "#ffffff",
    grey: alpha("#ffffff", 0.4),
  },
};
