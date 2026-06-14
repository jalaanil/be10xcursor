"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 1 }}>
        <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 2 : 0}
        sx={{
          bgcolor: trigger ? "background.paper" : "transparent",
          color: "text.primary",
          backdropFilter: trigger ? "blur(12px)" : "none",
          borderBottom: trigger ? 1 : 0,
          borderColor: "divider",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: "none",
                color: "inherit",
                letterSpacing: "-0.02em",
              }}
            >
              {profile.name.split(" ")[0]}
              <Box component="span" sx={{ color: "primary.main" }}>
                .
              </Box>
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                >
                  {item.label}
                </Button>
              ))}
              <ThemeToggle />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                aria-label="Open menu"
                edge="end"
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
