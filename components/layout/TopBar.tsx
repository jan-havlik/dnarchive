import { DRAWER_WIDTH } from "@config";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const SUB_ROUTE = [
  { route: "/", title: "All chromosomes" },
  { route: "/analysis", title: "Analysis" },
  { route: "/statistics", title: "Statistics" },
  { route: "/contact", title: "Contact" },
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
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
