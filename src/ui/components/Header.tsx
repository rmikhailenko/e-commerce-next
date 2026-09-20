"use client";

import ThemeToggle from "@/theme/ThemeToggle";
import Logo from "./Logo";
import { AppBar, Box } from "@mui/material";
import MainNav from "./MainNav";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.default",
        boxShadow: "none",
        paddingX: "20px",
        paddingY: "10px",
      }}
    >
      <Logo />
      <MainNav />
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: 3 }}
      >
        <ThemeToggle />
        <UserSection />
      </Box>
    </AppBar>
  );
}
