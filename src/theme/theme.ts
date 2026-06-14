"use client";

import { createTheme, type ThemeOptions } from "@mui/material/styles";

export type ColorMode = "light" | "dark";

const sharedTypography: ThemeOptions["typography"] = {
  fontFamily: "var(--font-inter), Roboto, Helvetica, Arial, sans-serif",
  h1: { fontWeight: 700, letterSpacing: "-0.02em" },
  h2: { fontWeight: 700, letterSpacing: "-0.02em" },
  h3: { fontWeight: 600, letterSpacing: "-0.01em" },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600 },
  button: { textTransform: "none", fontWeight: 600 },
};

const sharedComponents: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "10px 24px",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },
};

export function getTheme(mode: ColorMode) {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#5C6BC0", light: "#8E99F3", dark: "#26418F" },
            secondary: { main: "#26A69A" },
            background: { default: "#FAFAFA", paper: "#FFFFFF" },
            text: { primary: "#1A1A2E", secondary: "#5C5C7A" },
            divider: "rgba(0, 0, 0, 0.08)",
          }
        : {
            primary: { main: "#8E99F3", light: "#C5CAE9", dark: "#5C6BC0" },
            secondary: { main: "#4DB6AC" },
            background: { default: "#0F0F12", paper: "#1A1A1F" },
            text: { primary: "#F0F0F5", secondary: "#A0A0B8" },
            divider: "rgba(255, 255, 255, 0.08)",
          }),
    },
    typography: sharedTypography,
    shape: { borderRadius: 12 },
    components: sharedComponents,
  });
}
