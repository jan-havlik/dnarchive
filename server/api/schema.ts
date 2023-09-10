import { z } from "zod";

const lisAnalysisBaseSchema = z.object({
  chromosome: z.array(z.string()),
  start: z.number(),
  end: z.number(),
  dir: z.enum(["asc", "desc"]),
  sortBy: z.enum(["position", "score", "spacer_length"]),
});

const listAnalysisG4HunterSchema = z.object({
  analysis: z.enum(["g4", "all"]),
  threshold: z.number().optional(),
  window: z.number().optional(),
});

const listAnalysisPalindromeSchema = z.object({
  analysis: z.enum(["palindrome", "all"]),
  size: z.number().optional(),
  spacer: z.number().optional(),
  mismatches: z.number().optional(),
});

export const listAnalysisInputSchema = z.union([
  listAnalysisG4HunterSchema.merge(lisAnalysisBaseSchema),
  listAnalysisPalindromeSchema.merge(lisAnalysisBaseSchema),
]);

export type ListAnalysisInput = z.infer<typeof listAnalysisInputSchema>;

export const listSequenceInputSchema = z.object({
  chromosome: z.string(),
  start: z.number(),
  end: z.number(),
});

export type ListSequenceInput = z.infer<typeof listSequenceInputSchema>;
