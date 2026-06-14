import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getProjectBySlug, projects } from "@/data/portfolio";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: "The Problem", content: project.problem },
    { title: "My Process", content: project.process },
    { title: "The Outcome", content: project.outcome },
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Button
          component={Link}
          href="/#work"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          Back to work
        </Button>

        <Stack spacing={2} sx={{ mb: 4 }}>
          <Chip label={project.category} color="primary" variant="outlined" sx={{ alignSelf: "flex-start" }} />
          <Typography variant="h2" component="h1">
            {project.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            {project.summary}
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 240, md: 420 },
            borderRadius: 4,
            overflow: "hidden",
            mb: 6,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>

        {project.metrics && (
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {project.metrics.map((metric) => (
              <Grid key={metric} size={{ xs: 12, sm: 4 }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5" color="primary.main" fontWeight={700}>
                    {metric}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        <Stack spacing={6} sx={{ mb: 6 }}>
          {sections.map((section) => (
            <Box key={section.title}>
              <Typography variant="h4" component="h2" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
                {section.content}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box>
          <Typography variant="h6" gutterBottom>
            Tools used
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.tools.map((tool) => (
              <Chip key={tool} label={tool} variant="outlined" color="primary" />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
