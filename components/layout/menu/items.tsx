import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import TableChartIcon from "@mui/icons-material/TableChart";

export const MENU_ITEMS = [
  { label: "Browser", icon: <TableChartIcon />, path: "/" },
  { label: "Analysis", icon: <EditIcon />, path: "/analysis" },
  { label: "Contact", icon: <ContactsIcon />, path: "/contact" },
];
