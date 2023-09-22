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

const PalindromeFilterCard = ({ formData, setFormData }: Props) => {
  return (
    <BaseCard>
      <Stack spacing={2}>
        <Typography variant="h6">Palindrome analyser</Typography>
        <Divider />

        <TextField
          size="small"
          label="Size"
          id="outlined-required"
          type="number"
          value={formData.spacer}
          onChange={(event) => {
            setFormData({
              ...formData,
              spacer: Number(event.target.value),
            });
          }}
        />
        <TextField
          size="small"
          label="Spacer"
          type="number"
          id="outlined-required"
          value={formData.spacer}
          onChange={(event) => {
            setFormData({
              ...formData,
              spacer: Number(event.target.value),
            });
          }}
        />
        <TextField
          size="small"
          label="Mismatches"
          type="number"
          id="outlined-required"
          value={formData.mismatches}
          onChange={(event) => {
            setFormData({
              ...formData,
              mismatches: Number(event.target.value),
            });
          }}
        />
      </Stack>
    </BaseCard>
  );
};

export default PalindromeFilterCard;
