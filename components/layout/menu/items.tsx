import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BarChartIcon from "@mui/icons-material/BarChart";
import ContactsIcon from "@mui/icons-material/Contacts";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";

export const MENU_ITEMS = [
  { label: "Browser", icon: <AccountTreeIcon />, path: "/" },
  { label: "Analysis", icon: <TroubleshootIcon />, path: "/analysis" },
  { label: "Statistics", icon: <BarChartIcon />, path: "/statistics" },
  { label: "Contact", icon: <ContactsIcon />, path: "/contact" },
];
