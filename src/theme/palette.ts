import { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#FAFAFA",
  },
  secondary: {
    main: "#EBEBED",
  },

  background: {
    default: "#FFFFFF",
    paper: "#FAFAFA",
  },
  text: {
    primary: "#1F2937",
    secondary: "#9CA3AF",
    disabled: "#9CA3AF",
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  // 🔴 Primary Crimson (Slightly softened so it isn't too harsh on deep backgrounds)
  primary: {
    main: "#E56276", // Shifted lighter to stand out on dark paper
    light: "#F291A1", // Soft pastel crimson for subtle highlights
    dark: "#D23F57", // Your original light mode primary serves as the dark state here
    contrastText: "#FFFFFF",
  },

  // 🔵 Secondary Navy / Slate Blue
  secondary: {
    main: "#244F80", // Elevated contrast blue
    light: "#4377B5",
    dark: "#0F3460", // Original secondary
    contrastText: "#FFFFFF",
  },

  // ⚪ Typography and Text Colors (Inverted for high readability)
  text: {
    primary: "#F6F9FC", // Using your original off-white background as the crisp main text color
    secondary: "#AEB4BE", // Crisp, mid-tone gray for muted descriptions and ratings
    disabled: "#6A717C",
  },

  // 🌌 Page and Component Layout Backdrops
  background: {
    default: "#0A0E17", // Ultra-deep dark navy/black canvas for the main background
    paper: "#131A26", // Your original secondary/dark slate tones repurposed for card wrappers
  },

  // ⚠️ System borders, dividers, and custom grid lines
  divider: "#2B3445", // Your original main text color now creates subtle, sleek borders

  action: {
    active: "#E56276",
    hover: "rgba(229, 98, 118, 0.08)", // Soft crimson glow on element hovers
  },
};
