import G4HunterFilterCard from "@components/analysis/cards/analysis-filter-cards/G4HunterFilterCard";
import AttributesCard from "@components/analysis/cards/AttributesCard";
import ChromosomeSelector from "@components/analysis/cards/ChromosomeSelector";
import SortingCard from "@components/analysis/cards/sorting-card/SortingCard";
import type { FormData } from "@components/analysis/types";
import { CHROMOSOMES } from "@config";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useState } from "react";

const AnalysisContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    threshold: 1.2,
    windowSize: 25,
    orderBy: ["score"],
    dir: "desc",
    start: 1,
    end: 100_000,
    chromosome: [
      ...CHROMOSOMES.map((chromosome) =>
        chromosome.toLowerCase().split(" ").join("")
      ),
    ],
    analysis: "g4",
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Stack direction="column" spacing={1}>
          <Stack
            spacing={1}
            direction={{ sm: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <G4HunterFilterCard formData={formData} setFormData={setFormData} />
            <SortingCard formData={formData} setFormData={setFormData} />
          </Stack>
          <AttributesCard formData={formData} setFormData={setFormData} />
        </Stack>
      </Grid>

      <Grid item xs>
        <Stack
          spacing={1}
          sx={{ height: "100%" }}
          direction="column"
          justifyContent="space-between"
        >
          <ChromosomeSelector formData={formData} setFormData={setFormData} />
          <Button
            variant="outlined"
            fullWidth
            onClick={() =>
              router.push({ pathname: "/analysis/data/", query: formData })
            }
          >
            Save filter
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AnalysisContainer;
