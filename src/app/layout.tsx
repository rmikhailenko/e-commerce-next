import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/theme";
import "./globals.css";
import Header from "@/features/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Northstar Market",
    template: "%s | Northstar Market",
  },
  description: "A considered collection of everyday goods.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider options={{ key: "mui" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ px: "20px" }}>
              <Header />
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
