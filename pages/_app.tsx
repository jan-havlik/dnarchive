import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Menu from "@components/layout/menu/Menu";
import TopBar from "@components/layout/TopBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Menu />
      <TopBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, my: 2 }}
      >
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp;
