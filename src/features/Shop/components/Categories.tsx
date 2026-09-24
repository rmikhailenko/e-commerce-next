"use client";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Women", href: "/categories/women", img: "/categories.svg" },
  { label: "Men", href: "/categories/men", img: "/categories.svg" },
  {
    label: "Accessories",
    href: "/categories/accessories",
    img: "/categories.svg",
  },
  { label: "Beauty", href: "/categories/beauty", img: "/categories.svg" },
  { label: "Home", href: "/categories/home", img: "/categories.svg" },
  {
    label: "Electronics",
    href: "/categories/electronics",
    img: "/categories.svg",
  },
];

export default function Categories() {
  return (
    <Box sx={{ mt: 2 }} component="section" aria-label="Categories section">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h2">Categories</Typography>
      </Box>
      <Grid container>
        <List
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            overflowX: "auto",
            pb: 1,
          }}
        >
          {categories.map((c) => (
            <ListItem
              key={c.href}
              sx={{
                borderRadius: 1,
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <ListItemButton
                color="secondary"
                component={Link}
                href={c.href}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <ListItemAvatar>
                  <Image src={c.img} alt="" height={170} width={170} />
                </ListItemAvatar>
                <ListItemText primary={c.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
