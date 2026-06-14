"use client";

import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { skillCategories, skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            title="Skills & Tools"
            subtitle="The methods and tools I use to go from insight to shipped product."
          />
        </AnimatedSection>

        <Stack spacing={4}>
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category} delay={index * 0.1}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                  {category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <Chip
                        key={skill.label}
                        label={skill.label}
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                </Stack>
              </Box>
            </AnimatedSection>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
