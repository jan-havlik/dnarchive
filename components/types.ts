import { AppRouter } from "@server/api/base";
import { inferProcedureOutput } from "@trpc/server";

export type BrowseListQueryData = inferProcedureOutput<
  // @ts-ignore FIXME
  AppRouter["browse"]["list"]
>["chromosomes"];
