import { Box, Typography } from "@mui/material";
import LogoIcon from "./LogoIcon";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <LogoIcon />
      <Typography component="h5" variant="h5" color="textWhite">
        Homely
      </Typography>
    </Box>
  );
}
