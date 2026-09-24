import { Box } from "@mui/material";
import CategoriesList from "./CategoriesList";
import Search from "./Search";

export default function CategoriesControl() {
  return (
    <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
      <CategoriesList />
      <Search />
    </Box>
  );
}
