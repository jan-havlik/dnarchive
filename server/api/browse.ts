import {
  listAnalysisInputSchema,
  listSequenceInputSchema,
} from "@server/api/schema";
import { BrowseManager } from "@server/manager/BrowseManager";

import { baseProcedure, router } from "../trpc";

export const browseApi = router({
  listChromosomes: baseProcedure.query(() => BrowseManager.listChromosomes()),
  listAnalysis: baseProcedure
    .input(listAnalysisInputSchema)
    .query(({ input }) => BrowseManager.listAnalysis(input)),
  listSequence: baseProcedure
    .input(listSequenceInputSchema)
    .query(({ input }) => BrowseManager.listSequence(input)),
  getStatistics: baseProcedure.query(() => BrowseManager.getStatistics()),
});
