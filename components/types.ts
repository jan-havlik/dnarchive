import { AppRouter } from "@server/api/base";
import { inferProcedureOutput } from "@trpc/server";

export type BrowseListQueryData = inferProcedureOutput<
  AppRouter["browse"]["list"]
>["chromosomes"];
