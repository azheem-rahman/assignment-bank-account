import { mockTransactions } from "../../data/mockData";

const TransactionPrint = (inputAccount: string) => {
  console.log(`Account: ${inputAccount}`);

  const headers = ["Date    ", "Txn ID     ", "Type", "Amount"].join(" | "); // added blankspace for alignment
  console.log(headers);

  let transactionRows: string[] = [];

  mockTransactions.map((transaction) => {
    if (transaction.account === inputAccount) {
      transactionRows.push(
        `${transaction.date} | ${transaction.id} | ${
          transaction.type
        }    | ${transaction.amount.toFixed(2)}`
      ); // added blankspace for alignment
    }
  });
  console.log(transactionRows.join("\n"));
};

export default TransactionPrint;
