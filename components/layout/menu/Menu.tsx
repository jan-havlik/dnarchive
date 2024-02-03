import { DRAWER_WIDTH } from "@config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import {
  createTheme,
  CSSObject,
  styled,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

import { MENU_ITEMS } from "./items";
import Logo from "./logo.png";
import MenuItem from "./MenuItem";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH.OPEN,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: DRAWER_WIDTH.CLOSED,
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH.OPEN,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {
  open: boolean;
  onDrawerOpen(open: boolean): void;
};

export default function Menu({ open, onDrawerOpen }: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledDrawer variant="permanent" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => onDrawerOpen(!open)}
            edge="start"
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={(80 * 358) / 647}
            style={{ marginLeft: "15px", ...(!open && { display: "none" }) }}
          />
        </Toolbar>
        <List>
          {MENU_ITEMS.map(({ label, icon, path }) => (
            <MenuItem key={label} icon={icon} label={label} path={path} />
          ))}
        </List>
        <Box sx={{ height: "100%" }} />
        <Button
          color="inherit"
          onClick={() => onDrawerOpen(!open)}
          sx={{ marginBottom: 1, ...(!open && { display: "none" }) }}
        >
          <ArrowBackIcon />
        </Button>
      </StyledDrawer>
    </ThemeProvider>
  );
}
