import { DRAWER_WIDTH } from "@config";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

import { MENU_ITEMS } from "./items";
import MenuItem from "./MenuItem";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Menu() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>Logo</Toolbar>
        <List>
          {MENU_ITEMS.map(({ label, icon, path }) => (
            <MenuItem key={label} icon={icon} label={label} path={path} />
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Menu;
