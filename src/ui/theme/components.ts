import { Components } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30,
        paddingBlock: 17,
        paddingInline: 32,
        textTransform: "none",
        boxShadow: "none",
        fontWeight: 400,
        fontSize: 16,
        fontFamily: "var(--font-bricolage-grotesque)",
      },
    },
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.white,
        }),
      },

      {
        props: { variant: "contained", color: "secondary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
      {
        props: { variant: "contained", color: "info" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.text.brand,
        }),
      },
      {
        props: { variant: "outlined" },
        style: ({ theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.text.white,
          borderColor: theme.palette.text.white,
        }),
      },
    ],
  },
};
