import { AppRouter, appRouter } from "@server/api/base";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
