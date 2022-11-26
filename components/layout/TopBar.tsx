import { DRAWER_WIDTH } from "@config";
import AppBar from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

function TopBar() {
  return (
    <AppBar
      color="primary"
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: `${DRAWER_WIDTH}px`,
        bgcolor: "white",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: grey[800] }}
        >
          Human genome
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
