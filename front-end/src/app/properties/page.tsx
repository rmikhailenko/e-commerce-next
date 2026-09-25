import PropertiesList from "@/features/Properties/components/PropertiesList";
import { Box } from "@mui/material";

export default async function PropertiesPage() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        py: "20px",
        xs: { px: "16px" },
        sm: { px: "72px" },
        md: { px: "140px" },
        lg: { px: "260px" },
      }}
    >
      <PropertiesList />
    </Box>
  );
}
