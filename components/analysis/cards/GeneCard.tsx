import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BaseCard from "./BaseCard";

const GeneCard = () => {
  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Genes</Typography>

        <Divider />

        <Button
          sx={{ width: "120px" }}
          variant="outlined"
          size="small"
          endIcon={<AddIcon />}
        >
          Gene
        </Button>
        <Stack direction="row" spacing={1}>
          <Chip
            label="DCDC 2"
            variant="outlined"
            onClick={() => {}}
            onDelete={() => {}}
          />
          <Chip
            label="Clickable Deletable"
            variant="outlined"
            onClick={() => {}}
            onDelete={() => {}}
          />
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default GeneCard;
