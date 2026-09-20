import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
} from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";

const navItems = [
  {
    label: "Home",
    links: [
      { label: "Home", href: "/" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    label: "User Account",
    links: [
      { label: "Profile", href: "/profile" },
      { label: "Orders", href: "/orders" },
    ],
  },
];

export default function MainNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <Box component="nav" aria-label="Main navigation">
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        {navItems.map((item) => {
          const isOpen = activeMenu === item.label && Boolean(anchorEl);

          return (
            <ListItem
              key={item.label}
              disablePadding
              onMouseEnter={(event) => handleOpen(event, item.label)}
              onMouseLeave={handleClose}
              sx={{
                cursor: "pointer",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemButton
                sx={{
                  display: "flex",
                  borderRadius: 1,
                  color: "text.primary",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: "transparent" },
                  "&.Mui-focusVisible": { backgroundColor: "transparent" },
                }}
              >
                {item.label}
              </ListItemButton>

              <Popper
                open={isOpen}
                anchorEl={anchorEl}
                placement="bottom-start"
                sx={{
                  zIndex: 1300,
                  minWidth: 150,
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "background.default",
                  }}
                >
                  <List>
                    {item.links.map((link) => (
                      <ListItem key={link.label} disablePadding>
                        <Link
                          href={link.href}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <ListItemButton onClick={handleClose}>
                            <ListItemText primary={link.label} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Popper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
