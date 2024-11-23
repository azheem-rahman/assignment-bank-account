import { mockTransactions } from "../../data/mockData";

const PrintCheck = (
  inputAccount: string,
  inputYearMonth: string
): { valid: boolean; message: string } => {
  // check length YYYYMM
  if (inputYearMonth.length !== 6) {
    return { valid: false, message: "Date should be in YYYYMM format" };
  }

  // check if valid month
  const month = Number(`${inputYearMonth[4]}${inputYearMonth[5]}`);
  if (month > 12) {
    return { valid: false, message: "Invalid month" };
  }

  // check if account exist in data
  let exist = false;
  mockTransactions.forEach((transaction) => {
    if (transaction.account === inputAccount) {
      exist = true;
    }
  });
  if (!exist) {
    return {
      valid: false,
      message: `No transactions and interest exists for account for ${inputYearMonth}`,
    };
  }

  return { valid: true, message: "" };
};

export default PrintCheck;
