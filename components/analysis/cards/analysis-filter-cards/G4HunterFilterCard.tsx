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
          onChange={(event) =>
            setFormData({
              ...formData,
              threshold: Number(event.target.value),
            })
          }
        />
        <TextField
          size="small"
          label="Window size"
          id="outlined-required"
          type="number"
          value={formData.windowSize}
          onChange={(event) =>
            setFormData({
              ...formData,
              windowSize: Number(event.target.value),
            })
          }
        />
      </Stack>
    </BaseCard>
  );
};

export default G4HunterFilterCard;
