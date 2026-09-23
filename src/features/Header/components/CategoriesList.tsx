"use client";

import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "./MenuIcon";

const categories = [
  { label: "Category 1", href: "/categories/category-1" },
  { label: "Category 2", href: "/categories/category-2" },
  { label: "Category 3", href: "/categories/category-3" },
  { label: "Category 4", href: "/categories/category-4" },
];

export default function CategoriesList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-controls={open ? "categories-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<MenuIcon sx={{ width: 13, height: 13 }} />}
        variant="main"
        sx={{
          width: 250,
          display: "flex",
        }}
      >
        Categories
      </Button>

      <Menu
        id="categories-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "categories-button",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ mt: 1 }}
      >
        <List disablePadding sx={{ width: 250 }}>
          {categories.map((category) => (
            <MenuItem
              key={category.label}
              component="a"
              href={category.href}
              onClick={handleClose}
            >
              <ListItemText primary={category.label} />
            </MenuItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
