import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  path?: string;
  disabled?: boolean;
};

function MenuItem(props: Props) {
  const { icon, label, path = "", disabled = false } = props;

  const router = useRouter();

  const handleClick = useCallback(() => {
    console.log(path);

    router.push(path);
  }, [router, path]);

  return (
    <ListItem disablePadding>
      <ListItemButton disabled={disabled} onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
