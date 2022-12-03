import BaseCard from "@components/analysis/cards/BaseCard";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const G4HunterFilterCard = () => {
  return (
    <BaseCard>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography variant="h6">G4Hunter</Typography>
        <Divider />
        <TextField
          size="small"
          label="Threshold"
          id="outlined-required"
          defaultValue="1.2"
        />
        <TextField
          size="small"
          label="Window size"
          id="outlined-required"
          defaultValue="25"
        />
      </Stack>
    </BaseCard>
  );
};

export default G4HunterFilterCard;
