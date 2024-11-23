import { mockInterestRules, mockTransactions } from "../../data/mockData";
import { StatementRows } from "../../types/print";
import GetLastDayOfYearMonth from "../common/GetLastDayOfYearMonth";

const PrintStatement = (inputAccount: string, inputYearMonth: string) => {
  console.log(`Account: ${inputAccount}`);

  const headers = [
    "Date    ",
    "Txn ID     ",
    "Type",
    "   Amount ",
    "   Balance   ",
  ].join(" | "); // added blankspace for alignment
  console.log(headers);

  let statementRows: string[] = [];
  // let statementRows: StatementRows[] = [];

  let accountBalance = 0;
  // let totalInterest = 0;

  mockTransactions.map((transaction) => {
    // get current account balance
    if (transaction.type === "W") {
      accountBalance -= transaction.amount;
    } else if (transaction.type === "D") {
      accountBalance += transaction.amount;
    }

    if (transaction.account === inputAccount) {
      // get current transaction year month from transaction date
      let transactionYearMonth = "";

      for (let index = 0; index <= 5; index++) {
        transactionYearMonth += transaction.date[index];
      }

      // // get interest rate for current transaction
      // let interest = PrintApplyInterest(transaction.date, accountBalance);
      // totalInterest += interest;

      if (transactionYearMonth === inputYearMonth) {
        // statementRows.push({
        //   date: transaction.date,
        //   id: transaction.id,
        //   type: transaction.type,
        //   amount: transaction.amount,
        //   balance: accountBalance,
        // });
        statementRows.push(
          `${transaction.date} | ${transaction.id} | ${
            transaction.type
          }    |   ${transaction.amount.toFixed(
            2
          )}   |   ${accountBalance.toFixed(2)}`
        ); // added blankspace for alignment
      }
    }
  });

  // add interest
  // let currentActiveRule = mockInterestRules[0];
  // let activeRuleIndex = 0;

  // // check if active rule changes during month
  // const rulesYearMonths = mockInterestRules.map((rule) => {
  //   const yearMonth: string[] = [];
  //   for (let index = 0; index < 6; index++) {
  //     yearMonth.push(rule.date[index]);
  //   }
  //   return yearMonth.join("");
  // });

  // // if active rule changes during month
  // if (rulesYearMonths.indexOf(inputYearMonth) !== -1) {
  // }
  // // active rule does not change during month
  // else {
  //   // find number of days between transactions
  //   //
  // }

  // statementRows.map((statement, index) => {
  //   // current active rule is the most recent rule before current transaction date
  //   mockInterestRules.map((rule, index) => {
  //     if (Number(rule.date) < Number(statement.date)) {
  //       currentActiveRule = rule;
  //       activeRuleIndex = index;
  //     }
  //   });
  //   console.log(currentActiveRule.id);

  //   // if active rule is not the most recent rule => start date = transaction date, end date = 1 day before next active rule
  //   if (activeRuleIndex !== mockInterestRules.length - 1) {
  //     let startDate = Number(statement.date);
  //     let endDate = Number(mockInterestRules[activeRuleIndex + 1].date) - 1;
  //     let numOfDays = endDate - startDate + 1;
  //     console.log(`startDate: ${startDate}`);
  //     console.log(`endDate: ${endDate}`);
  //     console.log(numOfDays);
  //   } else {
  //     // if active rule is most recent rule
  //     // if rule date < transaction date, start date = active rule date, end date = 1 day before next transaction
  //     if (Number(currentActiveRule.date) < Number(statement.date)) {
  //       let startDate = Number(currentActiveRule.date);
  //       let endDate = Number(statement.date) - 1;
  //       let numOfDays = endDate - startDate + 1;
  //       console.log(`startDate: ${startDate}`);
  //       console.log(`endDate: ${endDate}`);
  //       console.log(numOfDays);
  //     }
  //     // if no new transaction till end of month, start date = transaction date, end date = end of month
  //     else {
  //       let startDate = Number(statement.date);
  //       let endDate = Number(GetLastDayOfYearMonth(inputYearMonth));
  //       let numOfDays = endDate - startDate;
  //       console.log(`startDate: ${startDate}`);
  //       console.log(`endDate: ${endDate}`);
  //       console.log(numOfDays);
  //     }
  //   }
  // });

  // accountBalance += totalInterest;
  // statementRows.push(
  //   `${GetLastDayOfYearMonth(
  //     inputYearMonth
  //   )} |             | I    | ${totalInterest} | ${accountBalance}`
  // );

  console.log(statementRows.join("\n"));
};

export default PrintStatement;
