import type { ListAnalysisInput, ListSequenceInput } from "@server/api/schema";
import { BrowseAdapter } from "@server/manager/adapter/BrowseAdapter";

export class BrowseManager {
  static async listChromosomes() {
    return BrowseAdapter.listChromosomes();
  }

  static async listAnalysis(input: ListAnalysisInput) {
    return BrowseAdapter.listAnalysis(input);
  }

  static async listSequence(input: ListSequenceInput) {
    return BrowseAdapter.listSequence(input);
  }

  static async getStatistics() {
    return BrowseAdapter.getStatistics();
  }
}
