import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Property } from "../types/property";

export default async function PropertyCard({
  property,
}: {
  property: Property;
}) {
  const { address, title, price, bedroom, bathroom, area } = property;
  return (
    <Card>
      <CardMedia>Image here</CardMedia>
      <CardContent>
        <Box>
          <Typography>{title}</Typography>
          <Typography>{address}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
