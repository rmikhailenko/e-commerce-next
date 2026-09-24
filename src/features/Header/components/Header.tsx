import { Box } from "@mui/material";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import UserSection from "../components/UserSection";
import CategoriesControl from "./CategoriesControl";

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
