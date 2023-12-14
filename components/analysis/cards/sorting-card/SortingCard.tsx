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
  const handleOrderBy = (orderBy: string, dir: "asc" | "desc") => {
    setFormData({ ...formData, orderBy: [orderBy], dir });
  };

  console.log({ formData });

  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Sort by</Typography>
        <Divider />
        <Stack direction="row" alignItems="start">
          <Stack direction="column" spacing={2}>
            <SortingInput
              checked={formData.orderBy[0] === "position"}
              title="G4Hunter position"
              orderBy="position"
              onOrderByChange={handleOrderBy}
            />
            <SortingInput
              checked={formData.orderBy[0] === "score"}
              title="G4Hunter score"
              subtitle="(grouped)"
              orderBy="score"
              onOrderByChange={handleOrderBy}
            />
            <SortingInput
              checked={formData.orderBy[0] === "spacer_length"}
              title="Quadruplex lenght"
              orderBy="spacer_length"
              onOrderByChange={handleOrderBy}
            />
          </Stack>
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default SortingCard;
