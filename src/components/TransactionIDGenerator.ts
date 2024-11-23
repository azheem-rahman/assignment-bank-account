import { mockTransactions } from "../data/mockData";

const TransactionIDGenerator = (date: string): string => {
  let count = 0;
  mockTransactions.forEach((transaction) => {
    if (transaction.date === date) {
      count++;
    }
  });

  if (count < 10) {
    return `${date}-0${count + 1}`;
  } else {
    return `${date}-${count + 1}`;
  }
};

export default TransactionIDGenerator;
