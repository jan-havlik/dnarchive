import { StatisticsContainer } from "@components/statistics/StatisticsContainer";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const { data, isLoading, isError } = trpc.browse.getStatistics.useQuery();

  return (
    <StatisticsContainer data={data} isLoading={isLoading} isError={isError} />
  );
};

export default Index;
