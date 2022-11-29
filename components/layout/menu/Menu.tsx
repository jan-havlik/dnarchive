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
import Typography from "@mui/material/Typography";

import { MENU_ITEMS } from "./items";
import MenuItem from "./MenuItem";

export const DRAWER_DIMENSIONS = {
  WIDTH: {
    OPEN: 250,
    CLOSE: 60,
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_DIMENSIONS.WIDTH.OPEN,
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
  width: DRAWER_DIMENSIONS.WIDTH.CLOSE,
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_DIMENSIONS.WIDTH.OPEN,
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
          <Typography
            variant="button"
            sx={{ ...(!open && { display: "none" }) }}
          >
            Logo
          </Typography>
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
