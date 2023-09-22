import type { ListAnalysisInput, ListSequenceInput } from "@server/api/schema";

import type { AnalysisResult } from "./client";
import { api } from "./client";

function mapAnalysisResults(
  originalG4Hunter: AnalysisResult["g4_hunter"],
  originalPalindromeFinder: AnalysisResult["palindrome_finder"]
) {
  return {
    ...(originalG4Hunter && {
      g4Hunter: originalG4Hunter.map(({ sub_score, ...rest }) => ({
        ...rest,
        subScore: sub_score,
      })),
    }),
    ...(originalPalindromeFinder && {
      palindromeFinder: originalPalindromeFinder.map(
        ({ mismatch_count, spacer_length, ...rest }) => ({
          ...rest,
          spacerLength: spacer_length,
          mismatchCount: mismatch_count,
        })
      ),
    }),
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
    const { analysis } = input;

    if (analysis === "g4") {
      const { chromosome, start, end, window, threshold } = input;

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

      return mapAnalysisResults(g4_hunter, []);
    } else if (analysis === "palindrome") {
      const { chromosome, start, end, size, spacer, mismatches } = input;

      const { palindrome_finder = [] } = await api.getAnalysis({
        queries: {
          analysis,
          // @ts-ignore FIXME
          chromosome,
          start,
          end,
          "palindrome-size": size,
          "palindrome-spacer": spacer,
          "palindrome-mismatches": mismatches,
        },
      });

      return mapAnalysisResults([], palindrome_finder);
    } else if (analysis === "all") {
      const {
        chromosome,
        start,
        end,
        // @ts-ignore FIXME
        window,
        // @ts-ignore FIXME
        threshold,
        // @ts-ignore FIXME
        size,
        // @ts-ignore FIXME
        spacer,
        // @ts-ignore FIXME
        mismatches,
      } = input;

      console.log({ input });

      const { g4_hunter, palindrome_finder } = await api.getAnalysis({
        queries: {
          analysis,
          // @ts-ignore FIXME
          chromosome,
          start,
          end,
          "palindrome-size": size,
          "palindrome-spacer": spacer,
          "palindrome-mismatches": mismatches,
          "g4-window": window,
          "g4-threshold": threshold,
        },
      });

      console.log({
        queries: {
          analysis,
          chromosome,
          start,
          end,
          "palindrome-size": size,
          "palindrome-spacer": spacer,
          "palindrome-mismatches": mismatches,
          "g4-window": window,
          "g4-threshold": threshold,
        },
      });

      return mapAnalysisResults(g4_hunter, palindrome_finder);
    }
  }

  static async listSequence(input: ListSequenceInput) {
    const { chromosome, start, end } = input;

    const items = await api.getSequence({
      queries: { chromosome, start, end },
    });

    const {
      analysis: { g4_hunter = [], palindrome_finder = [] },
      sequence = "",
    } = items;
    const mappedAnalysis = mapAnalysisResults(g4_hunter, palindrome_finder);

    return { ...mappedAnalysis, sequence };
  }
}
