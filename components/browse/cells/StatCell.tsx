import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Chip from "@mui/material/Chip";

type Props = {
  label: string;
};

export function StatCell({ label }: Props) {
  return (
    <Chip
      icon={<QueryStatsIcon />}
      color="success"
      variant="outlined"
      label={label}
    />
  );
}
