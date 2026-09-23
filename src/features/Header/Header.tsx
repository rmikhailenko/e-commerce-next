import { Box } from "@mui/material";
import Navigation from "./Navigation";
import Logo from "./components/Logo";
import UserSection from "./UserSection";
import CategoriesControl from "./components/CategoriesControl";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        pt: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Logo />
        <Navigation />
        <UserSection />
      </Box>
      <CategoriesControl />
    </Box>
  );
}
