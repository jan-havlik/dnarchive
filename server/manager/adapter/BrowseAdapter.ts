import type { ListAnalysisInput, ListSequenceInput } from "@server/api/schema";

import type { AnalysisResult } from "./client";
import { api } from "./client";

function mapAnalysisResults(originalG4Hunter: AnalysisResult["g4_hunter"]) {
  return {
    g4Hunter: originalG4Hunter.map(({ sub_score, ...rest }) => ({
      ...rest,
      subScore: sub_score,
    })),
  };
}

export class BrowseAdapter {
  static async listChromosomes() {
    const items = await api.getChromosomes();

    return items.map(
      ({ ref_seq, updated_at, gc_skew, gc_content, ...rest }) => ({
        refSequence: ref_seq,
        updatedAt: updated_at,
        gcSkew: gc_skew,
        gcContent: gc_content,
        ...rest,
      })
    );
  }

  static async listAnalysis(input: ListAnalysisInput) {
    const { analysis, chromosome, start, end, window, threshold } = input;

    const { g4_hunter = [] } = await api.getAnalysis({
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
    return mapAnalysisResults(g4_hunter);
  }

  static async listSequence(input: ListSequenceInput) {
    const { chromosome, start, end } = input;

    const items = await api.getSequence({
      queries: { chromosome, start, end },
    });

    const {
      analysis: { g4_hunter = [] },
      sequence = "",
    } = items;

    const mappedAnalysis = mapAnalysisResults(g4_hunter);

    return { ...mappedAnalysis, sequence };
  }
}
