import BaseCard from "@components/analysis/cards/BaseCard";
import { FormData } from "@components/analysis/types";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SortingInput from "./SortingInput";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const SortingCard = ({ formData, setFormData }: Props) => {
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
          <SortingInput title="Position" />
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default SortingCard;
