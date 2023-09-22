import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  refSequence: string;
};

export function NameCell({ name, refSequence }: Props) {
  return (
    <Stack>
      <Typography>{name} </Typography>
      <Typography variant="overline">{refSequence}</Typography>
    </Stack>
  );
}
