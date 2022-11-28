import Menu from "@components/layout/menu/Menu";
import TopBar from "@components/layout/TopBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import * as Sentry from "@sentry/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Menu />
      <TopBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "background.default", p: 3, my: 2 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Sentry.withProfiler(Layout);
