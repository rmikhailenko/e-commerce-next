"use client";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, List, ListItem, Typography } from "@mui/material";
import MenuIcon from "./MenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen((prev) => !prev);

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleMenu}
        aria-label="Open menu"
        sx={{
          px: "20px",
          py: "13px",
          fontSize: "16px",
        }}
        startIcon={<MenuIcon />}
      >
        <Typography variant="body2">Menu</Typography>
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "100%", sm: "475px" },
              bgcolor: "background.dark",
              p: 4,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 6 }}>
          <IconButton
            onClick={handleMenu}
            aria-label="Close menu"
            sx={{
              bgcolor: "text.white",
              p: 2,
              "&:hover": { bgcolor: "#eee" },
            }}
          >
            <CloseMenuIcon />
          </IconButton>
        </Box>

        <List
          component="nav"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <ListItem
                component={Link}
                key={href}
                href={href}
                onClick={handleMenu}
                sx={{
                  color: active ? "text.brand" : "text.grey",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Typography component="h2" variant="h2">
                  {active && "— "}
                  {label}
                </Typography>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: "auto", pt: 6 }}>
          <Typography color="textGrey" variant="body1">
            Contact
          </Typography>
          <Link href="mailto:hello@homely.com">
            <Typography color="textWhite" variant="body2">
              hello@homely.com
            </Typography>
          </Link>

          <Link href="tel:+1-212-456-7890">
            <Typography color="textWhite" variant="body2">
              +1-212-456-7890
            </Typography>
          </Link>

          <Typography color="textGrey" variant="body1">
            Socials
          </Typography>
          <Link href="">
            <Typography variant="body1" color="textWhite">
              X / Twitter
            </Typography>
          </Link>
          <Link href="">
            <Typography variant="body1" color="textWhite">
              Facebook
            </Typography>
          </Link>
          <Link href="">
            <Typography variant="body1" color="textWhite">
              Instagram
            </Typography>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}
