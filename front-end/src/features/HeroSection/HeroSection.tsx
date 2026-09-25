import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        pl: "260px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="body1" color="textWhite">
            Palm springs, CA
          </Typography>
          <Typography component="h1" variant="h2" color="textWhite">
            Futuristic Haven
          </Typography>

          <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary">
              Get in touch
            </Button>
            <Button variant="outlined">View Details</Button>
          </Stack>
        </Box>

        <Image
          src="/slider-image.webp"
          alt=""
          priority
          width={800}
          height={800}
          className="h-['800px'] w-[800px]"
        />
      </Box>
    </Box>
  );
}
