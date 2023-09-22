import G4HunterFilterCard from "@components/analysis/cards/analysis-filter-cards/G4HunterFilterCard";
import PalindromeFilterCard from "@components/analysis/cards/analysis-filter-cards/PalindromeFilterCard";
import AttributesCard from "@components/analysis/cards/AttributesCard";
import ChromosomeSelector from "@components/analysis/cards/ChromosomeSelector";
import SortingCard from "@components/analysis/cards/sorting-card/SortingCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useState } from "react";

const AnalysisContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    threshold: 1.2,
    windowSize: 20,
    size: 2,
    spacer: 20,
    mismatches: 0,
    orderBy: ["score"],
    dir: "desc",
    start: 50000,
    end: 400000,
    chromosome: ["chr1", "chr2"],
    analysis: "all",
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={9}>
        <Stack direction="column" spacing={1}>
          <Stack
            spacing={1}
            direction={{ sm: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <G4HunterFilterCard formData={formData} setFormData={setFormData} />
            <PalindromeFilterCard
              formData={formData}
              setFormData={setFormData}
            />
          </Stack>

          <SortingCard formData={formData} setFormData={setFormData} />
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
