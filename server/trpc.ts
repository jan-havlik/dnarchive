import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const baseProcedure = t.procedure;
