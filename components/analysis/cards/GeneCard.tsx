import type { FormData } from "@components/analysis/types";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { trpc } from "@utils/trpc";
import { useState } from "react";

import BaseCard from "./BaseCard";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const GeneCard = ({ formData, setFormData }: Props) => {
  const { data, isLoading } = trpc.browse.getGenes.useQuery();
  const [open, setOpen] = useState(false);

  const handleSetGeneWindow = (
    _: any,
    value: { chromosome: any; start: any; end: any; name: string }
  ) => {
    if (!value) {
      return;
    }
    console.log(data);

    const { chromosome, start, end, name } = value;

    setFormData({
      ...formData,
      chromosome: [chromosome],
      start,
      end,
      name,
    });
  };

  return (
    <BaseCard minHeight={100}>
      <Stack spacing={2}>
        <Typography variant="h6">Genes</Typography>

        <Divider />

        <Autocomplete
          id="asynchronous-demo"
          sx={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(chromosome, value) =>
            chromosome.name === value.name
          }
          // @ts-expect-error fixme !!!
          onChange={handleSetGeneWindow}
          getOptionLabel={(chromosome) => chromosome.name}
          options={data ?? []}
          loading={isLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Gene"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Stack>
    </BaseCard>
  );
};

export default GeneCard;
