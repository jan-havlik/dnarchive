import { AppRouter } from "@server/api/base";
import { inferProcedureOutput } from "@trpc/server";

export type BrowseListQueryData = inferProcedureOutput<
  // @ts-ignore FIXME
  AppRouter["browse"]["list"]
>["chromosomes"];

export type StatisticsQueryData = inferProcedureOutput<
  // @ts-ignore FIXME
  AppRouter["statistics"]["list"]
>["data"];
