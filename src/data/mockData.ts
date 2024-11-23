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
