import { BrowseManager } from "@server/manager/BrowseManager";
import { z } from "zod";

import { baseProcedure, router } from "../trpc";

const browseManager = new BrowseManager();

export const browseApi = router({
  list: baseProcedure.query(() => browseManager.listChromosomes()),
  listByName: baseProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => browseManager.listByName(input.name)),
});
