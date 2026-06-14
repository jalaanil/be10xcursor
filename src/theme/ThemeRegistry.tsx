"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ColorModeProvider } from "@/context/ColorModeContext";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </AppRouterCacheProvider>
  );
}
