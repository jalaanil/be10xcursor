"use client";

import { Typography, Box } from "@mui/material";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ fontWeight: 600, letterSpacing: "0.12em" }}
      >
        {title.split(" ")[0]}
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mt: 1, mb: subtitle ? 2 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: align === "center" ? 560 : 640, mx: align === "center" ? "auto" : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
