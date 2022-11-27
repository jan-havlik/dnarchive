import BookIcon from "@mui/icons-material/Book";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import HelpIcon from "@mui/icons-material/Help";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";
import WebAssetIcon from "@mui/icons-material/WebAsset";

export const MENU_ITEMS = [
  { label: "Browser", icon: <WebAssetIcon />, path: "/" },
  { label: "Analysis", icon: <EditIcon />, path: "/analysis" },
  { label: "Statistics", icon: <PieChartIcon />, path: "/statistics" },
  { label: "Contact", icon: <ContactsIcon />, path: "/contact" },
  { label: "Articles", icon: <BookIcon />, path: "/articles" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { label: "Support", icon: <HelpIcon />, path: "/support" },
];
