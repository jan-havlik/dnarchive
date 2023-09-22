import { BrowseContainer } from "@components/browse/BrowseContainer";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";

const Browse: NextPage = () => {
  const { data, isLoading, isError } = trpc.browse.listChromosomes.useQuery();

  return (
    <BrowseContainer
      data={data || []}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default Browse;
