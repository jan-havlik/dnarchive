import BaseCard from "@components/analysis/cards/BaseCard";
import type { FormData } from "@components/analysis/types";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const G4HunterFilterCard = ({ formData, setFormData }: Props) => {
  return (
    <BaseCard>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography variant="h6">G4Hunter</Typography>
        <Divider />
        <TextField
          size="small"
          label="Threshold"
          id="outlined-required"
          type="number"
          value={formData.threshold}
          inputProps={{
            step: 0.1,
          }}
          onChange={(event) => {
            const newThreshold = Number(event.target.value);

            if (1.2 <= newThreshold && newThreshold <= 4.0) {
              setFormData({
                ...formData,
                threshold: Number(event.target.value),
              });
            }
          }}
        />
      </Stack>
    </BaseCard>
  );
};

export default G4HunterFilterCard;
