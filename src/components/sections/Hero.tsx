"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { profile } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #FAFAFA 0%, #E8EAF6 50%, #F3E5F5 100%)"
            : "linear-gradient(135deg, #0F0F12 0%, #1A1A2E 50%, #16213E 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "radial-gradient(circle, rgba(92,107,192,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(142,153,243,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={3} maxWidth={720}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 600, letterSpacing: "0.15em" }}
            >
              Product Designer · {profile.yearsExperience} Years
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                lineHeight: 1.1,
              }}
            >
              Hi, I&apos;m{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                {profile.name.split(" ")[0]}
              </Box>
            </Typography>

            <Typography variant="h5" color="text.secondary" fontWeight={400}>
              {profile.tagline}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("work")}
              >
                View my work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </Button>
            </Stack>
          </Stack>
        </AnimatedSection>

        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
            sx={{ color: "text.secondary", flexDirection: "column", gap: 0.5 }}
          >
            <Typography variant="caption">Scroll</Typography>
            <ArrowDownwardIcon className="bounce-icon" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
