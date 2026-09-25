import { Box, Grid } from "@mui/material";

export default async function CategoriesSection() {
  return (
    <Box
      component="section"
      aria-label="Categories section"
      sx={{
        px: { lg: "260px", md: "130px", sm: "72px", xs: "16px" },
        py: "112px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            backgroundColor: "yellow",
            // height: { xs: "340px", md: "386px" },
            // maxWidth: { xs: "320px", md: "600px " },
          }}
        >
          Categories
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            backgroundColor: "yellow",
            // height: { xs: "340px", md: "386px" },
            // maxWidth: { xs: "320px", md: "600px " },
          }}
        >
          Categories
        </Grid>
      </Grid>
    </Box>
  );
}
