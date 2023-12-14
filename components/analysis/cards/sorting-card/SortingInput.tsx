import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

type Props = {
  checked: boolean;
  title: string;
  subtitle?: string;
  orderBy: string;
  onOrderByChange(orderBy: string, dir: "asc" | "desc"): void;
};

const SortingInput = ({
  checked,
  title,
  subtitle,
  orderBy,
  onOrderByChange,
}: Props) => {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSetSortDir = () => {
    setSortDir(sortDir === "asc" ? "desc" : "asc");
    handleSetChecked();
  };

  const handleSetChecked = () => {
    onOrderByChange(orderBy, sortDir);
  };

  return (
    <Stack
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton
        aria-label="delete"
        disabled={!checked}
        onClick={handleSetSortDir}
      >
        {sortDir === "asc" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowUpIcon />
        )}
      </IconButton>
      <Stack direction="column">
        <Typography variant="button">{title}</Typography>
        <Typography variant="caption">{subtitle}</Typography>
      </Stack>
      <Checkbox checked={checked} onClick={handleSetChecked} />
    </Stack>
  );
};

export default SortingInput;
