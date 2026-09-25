"use client";
import { Box } from "@mui/material";
import Header from "@/features/Header/Header";
import HeroSection from "@/features/HeroSection/HeroSection";
import PropertiesSection from "@/features/PropertiesSection/PropertiesSection";
import FeaturesSection from "@/features/FeaturesSection/FeaturesSection";
import TestimonialsSection from "@/features/TestimonialsSection/TestimonialsSection";
import CTASection from "@/features/CTASection/CTASection";
import Footer from "@/features/Footer/Footer";

export default function Gradient() {
  return (
    <Box component="main" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Hero with Gradient Background */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #7EA8DE 0%, #A9C6E8 25%, #D3E3F1 55%, #EFF4F9 80%, #F5F8FB 100%);",
        }}
      >
        <Header />
        <HeroSection />
      </Box>

      {/* Other Sections */}
      <PropertiesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </Box>
  );
}