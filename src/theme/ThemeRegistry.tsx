"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";

import theme from "@/theme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
