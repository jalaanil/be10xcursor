"use client";

import { useState, type FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { contact, profile, socialLinks } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitted(false);
    setSubmitError(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    );

    try {
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading title={contact.heading} subtitle={contact.subheading} />
        </AnimatedSection>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection delay={0.1}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.default",
                }}
              >
                <Stack spacing={3}>
                  {submitted && (
                    <Alert severity="success">
                      Thank you! Your email client should open with your message ready to send.
                    </Alert>
                  )}
                  {submitError && (
                    <Alert severity="error">
                      Something went wrong. Please email me directly at {contact.email}.
                    </Alert>
                  )}

                  <TextField
                    label="Name"
                    fullWidth
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    label="Message"
                    fullWidth
                    required
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                  />
                  <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />}>
                    Send message
                  </Button>
                </Stack>
              </Box>
            </AnimatedSection>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection delay={0.2}>
              <Stack spacing={4} sx={{ pt: { xs: 0, md: 2 } }}>
                <Box>
                  <Typography variant="overline" color="text.secondary">
                    Availability
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {profile.availability}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="overline" color="text.secondary">
                    Email
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                    <EmailIcon color="primary" fontSize="small" />
                    <Typography
                      component="a"
                      href={`mailto:${contact.email}`}
                      variant="body1"
                      sx={{ color: "primary.main", textDecoration: "none" }}
                    >
                      {contact.email}
                    </Typography>
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="overline" color="text.secondary">
                    Connect
                  </Typography>
                  <Stack spacing={1.5} sx={{ mt: 1 }}>
                    {socialLinks.map((link) => (
                      <Typography
                        key={link.platform}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body1"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "text.primary",
                          textDecoration: "none",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {link.platform === "LinkedIn" && <LinkedInIcon fontSize="small" />}
                        {link.platform}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
