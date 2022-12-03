import { CHROMOSOMES } from "@config";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";

import BaseCard from "./BaseCard";

const ChromosomeSelector: NextPage = () => {
  return (
    <BaseCard>
      <Grid container justifyContent="center">
        <Stack spacing={1}>
          <Typography variant="h6">Chromosomes</Typography>
          <Divider />
          {CHROMOSOMES.map((chromosome) => (
            <Stack direction="row" key={chromosome} alignItems="center">
              <FormControlLabel
                value="start"
                control={<Switch size="small" color="primary" />}
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
