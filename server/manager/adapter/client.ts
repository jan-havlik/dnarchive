import { API_URL } from "@config";
import { Zodios } from "@zodios/core";
import { z } from "zod";

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
        analysis: z.array(
          z.object({
            abs_score: z.number(),
            chromosome: z.string(),
            length: z.number(),
            position: z.number(),
            score: z.number(),
            sequence: z.string(),
            sub_score: z.number(),
            threshold: z.number(),
          })
        ),
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
        { name: "chromosomes", type: "Query", schema: z.string() },
        { name: "start", type: "Query", schema: z.number() },
        { name: "end", type: "Query", schema: z.number() },
        { name: "threshold", type: "Query", schema: z.number().optional() },
        { name: "window", type: "Query", schema: z.number().optional() },
      ],
      response: z.object({
        result: z.array(
          z.object({
            abs_score: z.number(),
            chromosome: z.string(),
            length: z.number(),
            position: z.number(),
            score: z.number(),
            sequence: z.string(),
            sub_score: z.number(),
          })
        ),
        settings: z.object({
          total: z.number(),
          freq_per_1k: z.number(),
          window_size: z.number(),
          threshold: z.number(),
        }),
      }),
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
          g4_count: z.number(),
          updated_at: z.string(),
        })
      ),
      status: 200,
    },
    {
      method: "get",
      path: "/stats",
      alias: "getStatistics",
      response: z.array(
        z.object({
          ["g4_frequency"]: z.object({
            1.2: z.number(),
            1.4: z.number(),
            1.6: z.number(),
            1.8: z.number(),
            2.0: z.number(),
            2.2: z.number(),
            2.4: z.number(),
            2.6: z.number(),
            2.8: z.number(),
            3.0: z.number(),
            3.2: z.number(),
            3.4: z.number(),
            3.6: z.number(),
            3.8: z.number(),
          }),
          ["g4_threshold_count"]: z.object({
            1.2: z.number(),
            1.4: z.number(),
            1.6: z.number(),
            1.8: z.number(),
            2.0: z.number(),
            2.2: z.number(),
            2.4: z.number(),
            2.6: z.number(),
            2.8: z.number(),
            3.0: z.number(),
            3.2: z.number(),
            3.4: z.number(),
            3.6: z.number(),
            3.8: z.number(),
          }),
          gc: z.object({
            content: z.number(),
            skew: z.number(),
          }),
          id: z.number(),
          length: z.number(),
          name: z.string(),
          ref_seq: z.string(),
          updated_at: z.string(),
        })
      ),
      status: 200,
    },
  ],
  { validate: false }
);
