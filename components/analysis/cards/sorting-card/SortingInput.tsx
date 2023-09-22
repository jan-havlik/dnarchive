import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const SortingInput = ({ title, subtitle }: Props) => {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSetSortDir = () => {
    setSortDir(sortDir === "asc" ? "desc" : "asc");
  };

  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <IconButton disabled aria-label="delete" onClick={handleSetSortDir}>
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
      <Checkbox disabled />
    </Stack>
  );
};

export default SortingInput;
