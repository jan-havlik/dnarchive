import G4HunterFilterCard from "@components/analysis/cards/analysis-filter-cards/G4HunterFilterCard";
import PalindromeFilterCard from "@components/analysis/cards/analysis-filter-cards/PalindromeFilterCard";
import RloopFilterCard from "@components/analysis/cards/analysis-filter-cards/RloopFilterCard";
import AttributesCard from "@components/analysis/cards/AttributesCard";
import ChromosomeSelector from "@components/analysis/cards/ChromosomeSelector";
import GeneCard from "@components/analysis/cards/GeneCard";
import SortingCard from "@components/analysis/cards/sorting-card/SortingCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const AnalysisContainer = () => {
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
            <G4HunterFilterCard />
            <RloopFilterCard />
            <PalindromeFilterCard />
          </Stack>

          <SortingCard />
          <AttributesCard />
          <GeneCard />
        </Stack>
      </Grid>

      <Grid item xs>
        <Stack
          sx={{ height: "100%" }}
          direction="column"
          justifyContent="space-between"
        >
          <ChromosomeSelector />
          <Button variant="outlined" fullWidth>
            Save filter
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AnalysisContainer;
