import BaseCard from "@components/analysis/cards/BaseCard";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const RloopFilterCard = () => {
  return (
    <BaseCard>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography variant="h6">Rloop</Typography>
        <Divider />

        <RadioGroup defaultValue="3g" name="radio-buttons-group">
          <FormControlLabel
            value="3g"
            control={<Radio size="small" />}
            label="3G Clusters"
          />
          <FormControlLabel
            value="4g"
            control={<Radio size="small" />}
            label="4G Clusters"
          />
        </RadioGroup>
      </Stack>
    </BaseCard>
  );
};

export default RloopFilterCard;
