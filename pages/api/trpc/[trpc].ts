import { appRouter } from "@server/api/base";
import * as trpcNext from "@trpc/server/adapters/next";

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
