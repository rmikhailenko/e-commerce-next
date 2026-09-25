"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

const featuredProperty: Property = {
  id: 1,
  title: "Futuristic Haven",
  location: "Palm Springs, CA",
  price: "$2,850,000",
  type: "For Sale",
  beds: 4,
  baths: 3,
  sqft: 3200,
  image: "/slider-image.webp",
  featured: true,
};

const properties: Property[] = [
  {
    id: 2,
    title: "Modern Villa",
    location: "Beverly Hills, CA",
    price: "$4,200,000",
    type: "For Sale",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "/slider-image.webp",
  },
  {
    id: 3,
    title: "Downtown Loft",
    location: "San Francisco, CA",
    price: "$1,950,000",
    type: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: "/slider-image.webp",
  },
  {
    id: 4,
    title: "Beach House",
    location: "Malibu, CA",
    price: "$6,800,000",
    type: "For Sale",
    beds: 6,
    baths: 5,
    sqft: 5500,
    image: "/slider-image.webp",
  },
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 8, lg: 12 },
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%", maxWidth: "1440px", mx: "auto" }}>
        {/* Featured Property - Left Side */}
        <Grid size={{ xs: 12, lg: 7 }} sx={{ display: "flex", alignItems: "flex-end", pb: { xs: 4, lg: 0 } }}>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              variant="body1"
              color="text.white"
              sx={{
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: { xs: "14px", sm: "16px" }
              }}
            >
              {featuredProperty.location}
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              color="text.white"
              sx={{ lineHeight: 1.1, fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" } }}
            >
              {featuredProperty.title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mt: 1 }}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  color: "text.white",
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: 600,
                }}
              >
                {featuredProperty.type}
              </Box>
              <Typography
                variant="body1"
                color="text.white"
                sx={{ opacity: 0.8, fontSize: { xs: "14px", sm: "16px" } }}
              >
                {featuredProperty.price}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, sm: 4 }, mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" color="text.white" sx={{ fontWeight: 600 }}>
                  {featuredProperty.beds}
                </Typography>
                <Typography variant="body2" color="text.white" sx={{ opacity: 0.7 }}>Beds</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" color="text.white" sx={{ fontWeight: 600 }}>
                  {featuredProperty.baths}
                </Typography>
                <Typography variant="body2" color="text.white" sx={{ opacity: 0.7 }}>Baths</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" color="text.white" sx={{ fontWeight: 600 }}>
                  {featuredProperty.sqft.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.white" sx={{ opacity: 0.7 }}>Sq Ft</Typography>
              </Box>
            </Box>

            <Stack spacing={2} direction="row" sx={{ mt: 3, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Schedule a Tour
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderColor: "text.white",
                  color: "text.white",
                  fontSize: { xs: "14px", sm: "16px" },
                  "&:hover": { borderColor: "primary.main" }
                }}
              >
                View Details
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Property Thumbnails - Right Side */}
        <Grid size={{ xs: 12, lg: 5 }} sx={{ display: { xs: "none", lg: "block" } }}>
          <Grid container spacing={2} sx={{ height: "100%", minHeight: "500px" }}>
            {properties.map((property, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={property.id}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    height: { xs: "200px", sm: "240px" },
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    }}
                  >
                    <Typography variant="body2" color="text.white" sx={{ fontWeight: 500 }}>
                      {property.location}
                    </Typography>
                    <Typography variant="h6" color="text.white" sx={{ mt: 0.5 }}>
                      {property.title}
                    </Typography>
                    <Typography variant="body1" color="text.white" sx={{ mt: 0.5, fontWeight: 600 }}>
                      {property.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Mobile Property Carousel */}
        <Grid size={12} sx={{ display: { xs: "block", lg: "none" }, mt: 4 }}>
          <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 2, scrollSnapType: "x mandatory" }}>
            {properties.map((property) => (
              <Box
                key={property.id}
                sx={{
                  flex: "0 0 280px",
                  borderRadius: 3,
                  overflow: "hidden",
                  scrollSnapAlign: "start",
                }}
              >
                <Box sx={{ position: "relative", width: "280px", height: "200px" }}>
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    }}
                  >
                    <Typography variant="caption" color="text.white" sx={{ fontWeight: 500 }}>
                      {property.location}
                    </Typography>
                    <Typography variant="h6" color="text.white" sx={{ mt: 0.5, fontSize: "18px" }}>
                      {property.title}
                    </Typography>
                    <Typography variant="body2" color="text.white" sx={{ mt: 0.5, fontWeight: 600 }}>
                      {property.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}