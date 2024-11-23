import { InterestRule } from "../types/interest";
import { Transaction } from "../types/transaction";

export let mockTransactions: Transaction[] = [
  {
    account: "AC001",
    date: "20230505",
    id: "20230505-01",
    type: "D",
    amount: 100.0,
  },
  {
    account: "AC001",
    date: "20230601",
    id: "20230601-01",
    type: "D",
    amount: 150.0,
  },
  {
    account: "AC001",
    date: "20230626",
    id: "20230626-01",
    type: "W",
    amount: 20.0,
  },
  {
    account: "AC001",
    date: "20230626",
    id: "20230626-02",
    type: "W",
    amount: 100.0,
  },
];

export let mockInterestRules: InterestRule[] = [
  {
    date: "20230101",
    id: "RULE01",
    rate: 1.95,
  },
  {
    date: "20230520",
    id: "RULE02",
    rate: 1.9,
  },
  {
    date: "20230615",
    id: "RULE03",
    rate: 2.2,
  },
];

export const updateMockInterestRules = (
  updatedRules: typeof mockInterestRules
) => {
  mockInterestRules.splice(0, mockInterestRules.length, ...updatedRules);
};
