"use client";
import { Box } from "@mui/material";
import Header from "@/features/Header/Header";
import HeroSection from "@/features/HeroSection/HeroSection";

export default function Gradient() {
  return (
    <Box component="main">
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "665px",
          background:
            "linear-gradient(180deg, #7EA8DE 0%, #A9C6E8 25%, #D3E3F1 55%, #EFF4F9 80%, #F5F8FB 100%);",
        }}
      >
        <Header />
        <HeroSection />
      </Box>
    </Box>
  );
}
