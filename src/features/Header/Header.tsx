import { Box } from "@mui/material";
import Logo from "./components/Logo";
import { Nav } from "./components/Nav";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "260px",
        py: "40px",
      }}
    >
      <Logo />
      <Nav />
    </Box>
  );
}
