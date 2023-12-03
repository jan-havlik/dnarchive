import type { ListAnalysisInput, ListSequenceInput } from "@server/api/schema";

import { api } from "./client";

export class BrowseAdapter {
  static async listChromosomes() {
    const items = await api.getChromosomes();

    return items.map(({ ref_seq, updated_at, g4_count, ...rest }) => ({
      refSequence: ref_seq,
      updatedAt: updated_at,
      g4Count: g4_count,
      ...rest,
    }));
  }

  static async listAnalysis(input: ListAnalysisInput) {
    const { analysis, chromosome, start, end, window, threshold } = input;

    const results = await api.getAnalysis({
      queries: {
        analysis,
        // @ts-ignore FIXME
        chromosome,
        start,
        end,
        "g4-window": window,
        "g4-threshold": threshold,
      },
    });

    return results.map(({ sub_score, abs_score, ...rest }) => ({
      ...rest,
      absScore: abs_score,
      subScore: sub_score,
    }));
  }

  static async listSequence(input: ListSequenceInput) {
    const { chromosome, start, end } = input;

    const items = await api.getSequence({
      queries: { chromosome, start, end },
    });

    const { analysis, sequence = "" } = items;

    const mappedAnalysis = {
      g4Hunter: analysis.map(({ sub_score, abs_score, ...rest }) => ({
        ...rest,
        absScore: abs_score,
        subScore: sub_score,
      })),
    };

    return { ...mappedAnalysis, sequence };
  }
}
