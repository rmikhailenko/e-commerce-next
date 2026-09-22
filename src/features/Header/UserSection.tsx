import ThemeToggle from "@/theme/components/ThemeToggle";
import { Box } from "@mui/material";
import BasketIcon from "./components/BasketIcon";
import AccountIcon from "./components/AccountIcon";

export default function UserSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <ThemeToggle />
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <AccountIcon />

        <BasketIcon />
      </Box>
    </Box>
  );
}
