export class BrowseAdapter {
  //NOTE(patrik): dummy data, replace with database calls

  private chromosomes = [
    { id: 1, name: "Chr 1", length: 100000000, size: "100MB" },
    { id: 2, name: "Chr 2", length: 100000000, size: "100MB" },
    { id: 3, name: "Chr 3", length: 100000000, size: "100MB" },
    { id: 4, name: "Chr 4", length: 100000000, size: "100MB" },
    { id: 5, name: "Chr 5", length: 100000000, size: "100MB" },
    { id: 6, name: "Chr 6", length: 100000000, size: "100MB" },
    { id: 7, name: "Chr 7", length: 100000000, size: "100MB" },
    { id: 8, name: "Chr 8", length: 100000000, size: "100MB" },
    { id: 9, name: "Chr 9", length: 100000000, size: "100MB" },
    { id: 10, name: "Chr X", length: 100000000, size: "100MB" },
  ];

  async list() {
    return {
      chromosomes: this.chromosomes,
    };
  }

  async listByName(name: string) {
    return {
      chromosome: this.chromosomes.find((chr) => chr.name !== name),
    };
  }
}
