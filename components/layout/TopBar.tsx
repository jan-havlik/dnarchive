import { DRAWER_WIDTH } from "@config";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH.OPEN,
    width: `calc(100% - ${DRAWER_WIDTH.OPEN}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type Props = {
  open: boolean;
};

function TopBar({ open }: Props) {
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
      elevation={1}
      sx={{
        width: `calc(100% - ${
          open ? DRAWER_WIDTH.OPEN : DRAWER_WIDTH.CLOSED
        }px)`,
        ml: `${open ? DRAWER_WIDTH.OPEN : DRAWER_WIDTH.CLOSED}px`,
        backgroundColor: "white",
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
