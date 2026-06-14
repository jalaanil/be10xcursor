"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading title="About Me" subtitle="Designing products people love to use." />
        </AnimatedSection>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection delay={0.1}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: 1,
                  borderColor: "divider",
                  aspectRatio: "1",
                  maxWidth: 360,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </AnimatedSection>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection delay={0.2}>
              <Stack spacing={3}>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  {profile.bio}
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    borderLeft: 4,
                    borderLeftColor: "primary.main",
                  }}
                >
                  <Typography variant="body1" fontStyle="italic" color="text.secondary">
                    &ldquo;{profile.philosophy}&rdquo;
                  </Typography>
                </Box>
                <Stack direction="row" spacing={4}>
                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {profile.location}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      Experience
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {profile.yearsExperience}+ Years
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
