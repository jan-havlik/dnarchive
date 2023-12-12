import type { FormData } from "@components/analysis/types";
import { CHROMOSOMES } from "@config";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import BaseCard from "./BaseCard";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const ChromosomeSelector = (props: Props) => {
  const { formData, setFormData } = props;

  const handleAllChromosomeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;

    if (checked) {
      setFormData({
        ...formData,
        chromosome: [
          ...CHROMOSOMES.map((c) => c.toLowerCase().split(" ").join("")),
        ],
      });
    } else {
      setFormData({ ...formData, chromosome: [] });
    }
  };

  const handleSelectChromosomeChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    setFormData({
      ...formData,
      chromosome: typeof value === "string" ? value.split(",") : value,
    });
  };

  // @ts-ignore
  return (
    <BaseCard>
      <Grid container justifyContent="center">
        <Stack spacing={2}>
          <Typography variant="h6">Chromosomes</Typography>
          <Divider />
          <FormControlLabel
            value="start"
            control={
              <Switch
                name="all"
                size="small"
                color="primary"
                checked={formData.chromosome.length === 24}
                onChange={handleAllChromosomeChange}
              />
            }
            label="All"
            labelPlacement="end"
          />
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              // @ts-expect-error FIXME
              value={formData.chromosome}
              onChange={handleSelectChromosomeChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {formData.chromosome.map((name) => (
                    <Chip key={name} label={name} />
                  ))}
                </Box>
              )}
            >
              {CHROMOSOMES.map((chromosome) =>
                chromosome.toLowerCase().split(" ").join("")
              ).map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </BaseCard>
  );
};

export default ChromosomeSelector;
