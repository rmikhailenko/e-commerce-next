import { Grid, Typography } from "@mui/material";
import { getProperties } from "../api";
import PropertyCard from "./PropertyCard";

export default async function PropertiesList() {
  const properties = await getProperties();

  return (
    <Grid container spacing={2} direction="row" sx={{}}>
      {properties.slice(0, 5).map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <PropertyCard property={p} />
        </Grid>
      ))}
    </Grid>
  );
}
