import type { FormData } from "@components/analysis/types";
import { CHROMOSOMES } from "@config";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
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

  const handleChromosomeSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { chromosome } = formData;
    const { checked, name } = event.target;

    const normalizedName = name.toLowerCase().split(" ").join("");
    const selectAll = normalizedName === "all";

    if (checked) {
      setFormData({
        ...formData,
        chromosome: selectAll
          ? [
              name,
              ...CHROMOSOMES.map((c) => c.toLowerCase().split(" ").join("")),
            ]
          : [...chromosome, normalizedName],
      });
    } else {
      setFormData({
        ...formData,
        chromosome: selectAll
          ? []
          : chromosome.filter((c) => c !== normalizedName),
      });
    }
  };

  return (
    <BaseCard>
      <Grid container justifyContent="center">
        <Stack spacing={1}>
          <Typography variant="h6">Chromosomes</Typography>
          <Divider />
          <Stack direction="row" alignItems="center">
            <FormControlLabel
              value="start"
              control={
                <Switch
                  name="all"
                  size="small"
                  color="primary"
                  checked={formData.chromosome.includes("all")}
                  onChange={handleChromosomeSelection}
                />
              }
              label="All"
              labelPlacement="end"
            />
          </Stack>
          {CHROMOSOMES.map((chromosome) => (
            <Stack direction="row" key={chromosome} alignItems="center">
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    name={chromosome}
                    size="small"
                    color="primary"
                    checked={formData.chromosome.includes(
                      chromosome.split(" ").join("").toLowerCase()
                    )}
                    onChange={handleChromosomeSelection}
                  />
                }
                label={chromosome}
                labelPlacement="end"
              />
            </Stack>
          ))}
        </Stack>
      </Grid>
    </BaseCard>
  );
};

export default ChromosomeSelector;
