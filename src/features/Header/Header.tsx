import { Box } from "@mui/material";
import Navigation from "./Navigation";
import Logo from "./components/Logo";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        pt: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo />
      <Navigation />
      <UserSection />
    </Box>
  );
}
