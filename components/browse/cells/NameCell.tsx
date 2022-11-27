import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  updatedAt: string;
};

export function NameCell({ name, updatedAt }: Props) {
  return (
    <Stack>
      <Typography>{name}</Typography>
      <Typography variant="overline">{`Updated at ${updatedAt}`}</Typography>
    </Stack>
  );
}
