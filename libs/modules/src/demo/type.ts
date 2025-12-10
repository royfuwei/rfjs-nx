import { TestData } from "@rfjs-nx/common";

export interface IDemoRepository {
  getTests(): Promise<TestData[]>;
}