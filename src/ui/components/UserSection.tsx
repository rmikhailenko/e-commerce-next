import { Box } from "@mui/material";
import { ShoppingBasketIcon } from "./icons/ShoppingBasketIcon";
import { PersonIcon } from "./icons/PersonIcon";
import theme from "@/theme";

export default function UserSection() {
  return (
    <Box component="div" sx={{ display: "flex", gap: 2 }}>
      <PersonIcon />
      <ShoppingBasketIcon />
    </Box>
  );
}
