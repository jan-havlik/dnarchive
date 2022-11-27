import { router } from "@server/trpc";

import { browseApi } from "./browse";

export const appRouter = router({
  browse: browseApi,
});

export type AppRouter = typeof appRouter;
