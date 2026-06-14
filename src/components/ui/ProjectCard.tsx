"use client";

import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: 1,
        borderColor: "divider",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 12px 40px rgba(92, 107, 192, 0.15)"
              : "0 12px 40px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <CardActionArea component={Link} href={`/work/${project.slug}`} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="200"
          image={project.heroImage}
          alt={project.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ p: 3 }}>
          <Chip label={project.category} size="small" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h5" component="h3" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.summary}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} color="primary.main">
            <Typography variant="body2" fontWeight={600}>
              View case study
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
