import { mockTransactions } from "../../data/mockData";
import CheckDateFormat from "../common/CheckDateFormat";

const TransactionCheck = (
  inputDate: string,
  inputAccount: string,
  inputType: string,
  inputAmount: string
): { valid: boolean; message: string } => {
  // check date should be in YYYYMMDD format
  const validDate = CheckDateFormat(inputDate);
  if (!validDate) {
    return { valid: false, message: "Date should be in YYYYMMDD format" };
  }

  // check transaction type valid - "W" or "D"
  if (inputType.toUpperCase() !== "W" && inputType.toUpperCase() !== "D") {
    return { valid: false, message: `Transaction type should be "W" or "D"` };
  }

  // check transaction amount valid - must be number
  const amount = Number(inputAmount);
  if (isNaN(amount) || !Number.isInteger(amount)) {
    return { valid: false, message: "Transaction amount should be a number" };
  }

  // check first transaction should not be a withdrawal
  const accountTransactions = mockTransactions.map((transaction) => {
    if (transaction.account === inputAccount) {
      return transaction;
    }
  });
  if (accountTransactions.length === 0 && inputType.toUpperCase() === "W") {
    return {
      valid: false,
      message: "First transaction for an account should not be a withdrawal",
    };
  }

  // check transactions should not make balance go below 0
  if (accountTransactions.length !== 0) {
    let accountBalance = 0;

    accountTransactions.forEach((transaction) => {
      if (transaction?.type === "W") {
        accountBalance -= transaction.amount;
      } else if (transaction?.type === "D") {
        accountBalance += transaction.amount;
      }
    });

    if (inputType.toUpperCase() === "W") {
      accountBalance -= amount;
    } else if (inputType.toUpperCase() === "D") {
      accountBalance += amount;
    }

    if (accountBalance < 0) {
      return { valid: false, message: "Transaction makes balance go below 0" };
    }
  }

  return { valid: true, message: "" };
};

export default TransactionCheck;
