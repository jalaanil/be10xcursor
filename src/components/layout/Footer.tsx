"use client";

import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PaletteIcon from "@mui/icons-material/Palette";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { profile, socialLinks } from "@/data/portfolio";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  Dribbble: <PaletteIcon />,
  Behance: <AutoAwesomeIcon />,
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={3}
        >
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.title} · {profile.yearsExperience} years of experience
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              © {year} {profile.name}. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            {socialLinks.map((link) => (
              <IconButton
                key={link.platform}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                color="primary"
              >
                {socialIcons[link.platform] ?? <EmailIcon />}
              </IconButton>
            ))}
            <IconButton onClick={scrollToTop} aria-label="Back to top" color="default">
              <KeyboardArrowUpIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
