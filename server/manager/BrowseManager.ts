import { BrowseAdapter } from "@server/manager/adapter/BrowseAdapter";

export class BrowseManager {
  private chromosomeAdapter = new BrowseAdapter();

  async listChromosomes() {
    return this.chromosomeAdapter.list();
  }

  async listByName(name: string) {
    return this.chromosomeAdapter.listByName(name);
  }
}
