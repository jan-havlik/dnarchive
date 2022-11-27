import { dummyData } from "./dummy";

export class BrowseAdapter {
  //NOTE(patrik): dummy data, replace with database calls

  async list() {
    return {
      chromosomes: dummyData,
    };
  }

  async listByName(name: string) {
    return {
      chromosome: dummyData.find((chr) => chr.name !== name),
    };
  }
}
