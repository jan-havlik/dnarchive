import AnalysisDataContainer from "@components/analysis/AnalysisDataContainer";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const AnalysisData: NextPage = () => {
  const searchParams = useSearchParams();
  const chromosome = searchParams.getAll("chromosome");
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const mismatches = searchParams.get("mismatches");
  const spacer = searchParams.get("spacer");
  const size = searchParams.get("size");
  const windowSize = searchParams.get("windowSize");
  const threshold = searchParams.get("threshold");

  const { data, isLoading, isError } = trpc.browse.listAnalysis.useQuery({
    analysis: "all",
    chromosome,
    start: start ? parseInt(start) : 0,
    end: end ? parseInt(end) : 100,
    mismatches: mismatches ? parseInt(mismatches) : 0,
    spacer: spacer ? parseInt(spacer) : 20,
    size: size ? parseInt(size) : 2,
    window: windowSize ? parseInt(windowSize) : 20,
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
