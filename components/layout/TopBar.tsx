import { DRAWER_WIDTH } from "@config";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const SUB_ROUTE = [
  { route: "/", title: "All chromosomes" },
  { route: "/analysis", title: "Analysis" },
  { route: "/contact", title: "Contact" },
  { route: "/articles", title: "Articles" },
  { route: "/statistics", title: "Statistics" },
  { route: "/settings", title: "Settings" },
  { route: "/support", title: "Support" },
];

function TopBar() {
  const router = useRouter();

  const subTitle = useMemo(() => {
    const subTitle = SUB_ROUTE.find((r) => r.route === router.pathname)?.title;

    if (!subTitle) {
      return;
    }

    return "> " + subTitle;
  }, [router.pathname]);

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
          component="div"
          sx={{ flexGrow: 1, color: grey[900] }}
        >
          Human genome {subTitle}
        </Typography>

        <Stack direction="row" alignItems="center" gap="5px">
          <IconButton>
            <SearchIcon color="action" />
          </IconButton>
          <IconButton>
            <NotificationsIcon color="action" />
          </IconButton>

          <Typography variant="button" sx={{ flexGrow: 1, color: grey[900] }}>
            test@test.com
          </Typography>

          <IconButton>
            <AccountCircle color="action" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
