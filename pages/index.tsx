import { BrowseTable } from "@components/browse/BrowseTable";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";

const Browse: NextPage = () => {
  const { data, isLoading, isError } = trpc.browse.list.useQuery();

  return (
    <BrowseTable
      data={data?.chromosomes}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default Browse;
