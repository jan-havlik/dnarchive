import Typography from "@mui/material/Typography";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";

const Browse: NextPage = () => {
  const data = trpc.browse.list.useQuery();
  const name = trpc.browse.listByName.useQuery({ name: "chr 1" });

  return (
    <>
      <Typography>{JSON.stringify(data.data?.chromosomes)}</Typography>
      <Typography>{JSON.stringify(name.data?.chromosome)}</Typography>
    </>
  );
};

export default Browse;
