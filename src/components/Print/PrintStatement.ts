import { mockTransactions } from "../../data/mockData";

const PrintStatement = (inputAccount: string, inputYearMonth: string) => {
  console.log(`Account: ${inputAccount}`);

  const headers = ["Date    ", "Txn ID     ", "Type", "Amount"].join(" | "); // added blankspace for alignment
  console.log(headers);

  let statementRows: string[] = [];

  mockTransactions.map((transaction) => {
    if (transaction.account === inputAccount) {
      let transactionYearMonth = "";

      for (let index = 0; index <= 5; index++) {
        transactionYearMonth += transaction.date[index];
      }

      if (transactionYearMonth === inputYearMonth) {
        statementRows.push(
          `${transaction.date} | ${transaction.id} | ${
            transaction.type
          }    | ${transaction.amount.toFixed(2)}`
        ); // added blankspace for alignment
      }
    }
  });

  // add interest

  console.log(statementRows.join("\n"));
};

export default PrintStatement;
