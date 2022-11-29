import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import BaseCard from "./BaseCard";

const AttributesCard = () => {
  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Attributes</Typography>
        <Divider />

        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={3}>
            <TextField
              size="small"
              label="Location"
              id="outlined-required"
              defaultValue="200-800"
            />
            <TextField
              size="small"
              label="Length"
              id="outlined-required"
              defaultValue="600"
            />
          </Stack>

          <FormControl>
            <FormLabel>Strand</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Strand +" />
              <FormControlLabel control={<Checkbox />} label="Strand -" />
            </FormGroup>
          </FormControl>
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default AttributesCard;
