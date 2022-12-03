import BaseCard from "@components/analysis/cards/BaseCard";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SortingInput from "./SortingInput";

const SortingCard = () => {
  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Sort by</Typography>
        <Divider />
        <Stack direction="row" alignItems="start">
          <Stack direction="column">
            <SortingInput title="G4Hunter score" subtitle="(individual)" />
            <SortingInput title="G4Hunter score" subtitle="(grouped)" />
          </Stack>
          <SortingInput title="R-loop lenght" />
          <SortingInput title="△G" />
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default SortingCard;
