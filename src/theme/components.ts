import { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    main: true;
    nav: true;
  }
}

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    variants: [
      {
        props: { variant: "main" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }),
      },
      {
        props: { variant: "main", color: "secondary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
      {
        props: { variant: "nav" },
        style: ({ theme }) => ({
          // backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }),
      },
    ],
  },
};
