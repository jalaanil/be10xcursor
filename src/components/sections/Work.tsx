"use client";

import { Box, Container, Grid2 as Grid } from "@mui/material";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Work() {
  return (
    <Box
      id="work"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            title="Selected Work"
            subtitle="A few projects that showcase my approach to research, design, and collaboration."
          />
        </AnimatedSection>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={project.slug} size={{ xs: 12, md: 4 }}>
              <AnimatedSection delay={index * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
