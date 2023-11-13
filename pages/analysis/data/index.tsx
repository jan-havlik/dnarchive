import AnalysisDataContainer from "@components/analysis/AnalysisDataContainer";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const AnalysisData: NextPage = () => {
  const searchParams = useSearchParams();
  const chromosome = searchParams.getAll("chromosome");
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const windowSize = searchParams.get("windowSize");
  const threshold = searchParams.get("threshold");

  const { data, isLoading, isError } = trpc.browse.listAnalysis.useQuery({
    analysis: "g4",
    chromosome,
    start: start ? parseInt(start) : 0,
    end: end ? parseInt(end) : 100,
    window: windowSize ? parseInt(windowSize) : 25,
    dir: "asc",
    sortBy: "score",
    threshold: threshold ? parseFloat(threshold) : 1.2,
  });

  return (
    <AnalysisDataContainer
      isLoading={isLoading}
      isError={isError}
      // @ts-ignore FIXME
      data={data}
    />
  );
};

export default AnalysisData;
