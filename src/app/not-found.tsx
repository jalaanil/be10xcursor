import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 12,
        }}
      >
        <Typography variant="h1" color="primary" fontWeight={700}>
          404
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Page not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Typography>
        <Button component={Link} href="/" variant="contained">
          Back to home
        </Button>
      </Box>
    </Container>
  );
}
