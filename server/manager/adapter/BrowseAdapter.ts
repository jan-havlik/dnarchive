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
    const { analysis, chromosome, start, end, window, threshold, sortBy, dir } =
      input;

    const { result, settings } = await api.getAnalysis({
      queries: {
        analysis,
        chromosomes: chromosome.join(","),
        start,
        end,
        window,
        threshold,
        sort_by: `${sortBy},${dir}`,
      },
    });

    return {
      items: result.map(({ sub_score, abs_score, ...rest }) => ({
        ...rest,
        absScore: abs_score,
        subScore: sub_score,
      })),
      settings,
    };
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

  static async getStatistics() {
    return api.getStatistics();
  }

  static async getGenes() {
    return api.getGenes();
  }
}
