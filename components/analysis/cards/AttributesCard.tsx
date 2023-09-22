import { FormData } from "@components/analysis/types";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import BaseCard from "./BaseCard";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const AttributesCard = ({ formData, setFormData }: Props) => {
  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Attributes</Typography>
        <Divider />

        <Stack direction="row" spacing={2}>
          <TextField
            size="small"
            label="Start"
            id="outlined-required"
            value={formData.start}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, start: parseInt(e.target.value) })
            }
          />
          <TextField
            size="small"
            label="End"
            id="outlined-required"
            type="number"
            value={formData.end}
            onChange={(e) =>
              setFormData({ ...formData, end: parseInt(e.target.value) })
            }
          />
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default AttributesCard;
