import { API_URL } from "@config";
import { Zodios } from "@zodios/core";
import { z } from "zod";

const analysisResultSchema = z.object({
  g4_hunter: z.array(
    z.object({
      id: z.number(),
      position: z.number(),
      length: z.number(),
      score: z.number(),
      sequence: z.string(),
      sub_score: z.number(),
    })
  ),
});

export type AnalysisResult = z.infer<typeof analysisResultSchema>;

export const api = new Zodios(
  API_URL,
  [
    {
      method: "get",
      path: "/sequence",
      alias: "getSequence",
      parameters: [
        { name: "chromosome", type: "Query", schema: z.string() },
        { name: "start", type: "Query", schema: z.number() },
        { name: "end", type: "Query", schema: z.number() },
      ],
      response: z.object({
        analysis: z.object({
          g4_hunter: z.array(
            z.object({
              id: z.number(),
              position: z.number(),
              length: z.number(),
              score: z.number(),
              sequence: z.string(),
              sub_score: z.number(),
            })
          ),
        }),
        sequence: z.array(z.string()),
      }),
      status: 200,
    },
    {
      method: "get",
      path: "/analysis",
      alias: "getAnalysis",
      parameters: [
        {
          name: "analysis",
          type: "Query",
          schema: z.enum(["g4"]),
        },
        { name: "chromosome", type: "Query", schema: z.string() },
        { name: "start", type: "Query", schema: z.number() },
        { name: "end", type: "Query", schema: z.number() },
        { name: "g4-threshold", type: "Query", schema: z.number().optional() },
        { name: "g4-window", type: "Query", schema: z.number().optional() },
      ],
      response: analysisResultSchema,
      status: 200,
    },
    {
      method: "get",
      path: "/chromosomes",
      alias: "getChromosomes",
      response: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          ref_seq: z.string(),
          length: z.number(),
          gc_content: z.number(),
          gc_skew: z.number(),
          updated_at: z.string(),
        })
      ),
      status: 200,
    },
  ],
  { validate: false }
);
