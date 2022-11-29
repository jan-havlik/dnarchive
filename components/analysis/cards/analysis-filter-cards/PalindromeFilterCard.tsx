import BaseCard from "@components/analysis/cards/BaseCard";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const PalindromeFilterCard = () => {
  return (
    <BaseCard>
      <Stack spacing={2}>
        <Typography variant="h6">Palindrome analyser</Typography>
        <Divider />

        <TextField
          size="small"
          label="△G(cf) - △G(lin)"
          id="outlined-required"
          defaultValue="0,1"
        />
        <TextField
          size="small"
          label="Size"
          id="outlined-required"
          defaultValue="6-30"
        />
        <TextField
          size="small"
          label="Spacer"
          id="outlined-required"
          defaultValue="0-10"
        />
        <TextField
          size="small"
          label="Mismatches"
          id="outlined-required"
          defaultValue="0,1"
        />
      </Stack>
    </BaseCard>
  );
};

export default PalindromeFilterCard;
