import { mockTransactions } from "../data/mockData";

const TransactionPrint = (inputAccount: string) => {
  console.log(`Account: ${inputAccount}`);

  const headers = ["Date    ", "Txn ID     ", "Type", "Amount"].join(" | "); // added blankspace for alignment
  console.log(headers);

  const transactionRows = mockTransactions.map((transaction) => {
    if (transaction.account === inputAccount) {
      return `${transaction.date} | ${transaction.id} | ${transaction.type}    | ${transaction.amount}`; // added blankspace for alignment
    }
  });
  console.log(transactionRows.join("\n"));
};

export default TransactionPrint;
