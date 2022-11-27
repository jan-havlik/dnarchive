import type { AppRouter } from "@server/api/base";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return ""; //NOTE(patrik): browser should use relative path
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`; //NOTE(patrik): reference for vercel.com
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
