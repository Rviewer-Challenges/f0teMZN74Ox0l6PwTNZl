import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import themes from "../styles/themes";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={themes.light}>
        <Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </React.StrictMode>
  );
}
